const { exec } = require('child_process');
const os = require('os');

const platform = os.platform();

if (platform === 'win32') {
    exec('npm install @esbuild/win32-x6', (error) => {
        if (error) {
            console.error('Failed to install dependency-for-windows:', error);
        }
    });
}
// else if (platform === 'darwin') {
//     exec('npm install dependency-for-mac', (error) => {
//         if (error) {
//             console.error('Failed to install dependency-for-mac:', error);
//         }
//     });
// }
else {
    console.log('No OS-specific dependency to install');
}
