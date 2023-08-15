//MODELS ARE FOR REACHING OUT TO THE DATA BASE
import { RowDataPacket } from 'mysql2';
import pool from './database';
//get 6 most recent BLOGs info
 //Establish a connection
  //get the data


export const getBlog = async (): Promise<RowDataPacket[]>=> {
    const query = 'SELECT * FROM blogs ORDER BY created DESC LIMIT 6';
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
  const query = 'SELECT * FROM blogs WHERE created >= DATE_SUB(NOW(), INTERVAL 3 MONTH) ORDER BY RAND() LIMIT 5;'
  const [data] = (await pool.promise().query(query));
    return data;
}

