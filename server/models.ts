//MODELS ARE FOR REACHING OUT TO THE DATA BASE
import { RowDataPacket } from 'mysql2';
import pool from './database';
//get 6 most recent BLOGs info
 //Establish a connection
  //get the data


export const getBlog = async (): Promise<RowDataPacket[]>=> {
    const query = 'SELECT * FROM blogs ORDER BY created DESC LIMIT 7'; //BETWEEN 2 AND 7
    const [data] = (await pool.promise().query(query));
    return data as RowDataPacket[];
  }

//get TAGS of the 6 blogs by passing the BLOGID number of each BLOG
 //Establish a connection
 //get the data
export const getSingleTag = async (blogid: number) => {
    const query = 'SELECT name FROM tags JOIN blogTagsBridge ON tags.id = blogTagsBridge.tagid WHERE blogTagsBridge.blogid = ?';
    const [data] = await pool.promise().query(query, [blogid]);
    return data;
}


export const getAllTags = async () => {
    const blogPosts = await getBlog();
    
    const allTags = await Promise.all(
      blogPosts.map(async (blog) => {
        const tags = await getSingleTag(blog.id);
        return tags;
      })
    );
    return allTags;
  }

export const getAllPopular = async () => {
  const query = 'SELECT * FROM blogs WHERE created >= DATE_SUB(NOW(), INTERVAL 3 MONTH) ORDER BY RAND() LIMIT 10;'
  const [data] = (await pool.promise().query(query));
    return data;
}

export const getCategoryBlogs = async (category) => {
  const query = `
    SELECT b.id, b.title, b.content, b.authorid, b.created, b.summary
    FROM blogs AS b
    JOIN categories AS c ON b.categoryid = c.id
    WHERE c.name = ?
    ORDER BY b.created DESC;
  `;
  const [data] = await pool.promise().query(query, [category]);
  return data;
};

export const getBlogPost = async (blog: string) => {
  const query = `
    SELECT b.id, b.title, b.content, b.authorid, b.created
    FROM blogs AS b
    WHERE b.title = ?
  `;
  const [data]= await pool.promise().query(query, [blog]);
  return data;
};

export const getTagsBlog = async (blog: string) => {
  const query = `
  SELECT tags.name FROM tags JOIN blogTagsBridge ON tags.id = blogTagsBridge.tagid 
  JOIN blogs ON blogs.id = blogTagsBridge.blogid  WHERE blogs.title = ?
  `;
  const [data] = await pool.promise().query(query, [blog]);
  return data;
}
