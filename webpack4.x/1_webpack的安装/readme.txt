注意：webpack最好不要全局安装，否则如果存在不同版本webpack的项目时，无法同时启动
做法：将webpack安装到项目目录中，然后可以使用npx命令执行webpack命令，npx会寻找当前目录下的node_modules文件夹下是否存在某个模块

可以试试分别在 project-1 和 project-2 文件夹下安装依赖后执行 npx webpack -v 命令
将会得到两个不同版本的webpack
