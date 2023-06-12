const Home = () => {

    const title = 'Welcome to My New Blog!';
    const likes = 100;
    const link = "https://wwww.baidu.com"

    return (
        <div className="home">
            <h1>{title}</h1>
            <p>点赞：{likes}</p>
            <a href={link}>百度</a>
        </div>
    );
}

export default Home;