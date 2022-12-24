import Blog from "../models/blog.js";

export const FetchBlogs = async (req, res) => {
  try {
    // const blogs = await Blog.find();

    const data = [
      {
        _id: "34afk",
        title: "Chapter 1",
        body: "From the corner of the divan of Persian saddle-bags on which he was lying, smoking, as was his custom, innumerable cigarettes, Lord Henry Wotton could just catch the gleam of the honey-sweet and honey-coloured blossoms of a laburnum, whose tremulous branches seemed hardly able to bear the burden of a beauty so flamelike as theirs; and now and then the fantastic shadows of birds in flight flitted across the long tussore-silk curtains that were stretched in front of the huge window, producing a kind of momentary Japanese effect, and making him think of those pallid, jade-faced painters of Tokyo who, through the medium of an art that is necessarily immobile, seek to convey the sense of swiftness and motion. The sullen murmur of the bees shouldering their way through the long unmown grass, or circling with monotonous insistence round the dusty gilt horns of the straggling woodbine, seemed to make the stillness more oppressive. The dim roar of London was like the bourdon note of a distant organ.",
        createdAt: "10/23/2002",
        updatedAt: "11/5/2002",
        categories: ["new", "trending", "fart", "joy"],
        likes: 34,
        comments: 50,
        readTime: 2,
      },
      {
        _id: "35afk",
        title: "Chapter 2",
        body: "From the corner of the divan of Persian saddle-bags on which he was lying, smoking, as was his custom, innumerable cigarettes, Lord Henry Wotton could just catch the gleam of the honey-sweet and honey-coloured blossoms of a laburnum, whose tremulous branches seemed hardly able to bear the burden of a beauty so flamelike as theirs; and now and then the fantastic shadows of birds in flight flitted across the long tussore-silk curtains that were stretched in front of the huge window, producing a kind of momentary Japanese effect, and making him think of those pallid, jade-faced painters of Tokyo who, through the medium of an art that is necessarily immobile, seek to convey the sense of swiftness and motion. The sullen murmur of the bees shouldering their way through the long unmown grass, or circling with monotonous insistence round the dusty gilt horns of the straggling woodbine, seemed to make the stillness more oppressive. The dim roar of London was like the bourdon note of a distant organ.",
        createdAt: "10/23/2002",
        updatedAt: "11/5/2002",
        categories: ["new", "trending", "fart", "joy"],
        likes: 34,
        comments: 50,
        readTime: 2,
      },
      {
        _id: "36afk",
        title: "Chapter 3",
        body: "From the corner of the divan of Persian saddle-bags on which he was lying, smoking, as was his custom, innumerable cigarettes, Lord Henry Wotton could just catch the gleam of the honey-sweet and honey-coloured blossoms of a laburnum, whose tremulous branches seemed hardly able to bear the burden of a beauty so flamelike as theirs; and now and then the fantastic shadows of birds in flight flitted across the long tussore-silk curtains that were stretched in front of the huge window, producing a kind of momentary Japanese effect, and making him think of those pallid, jade-faced painters of Tokyo who, through the medium of an art that is necessarily immobile, seek to convey the sense of swiftness and motion. The sullen murmur of the bees shouldering their way through the long unmown grass, or circling with monotonous insistence round the dusty gilt horns of the straggling woodbine, seemed to make the stillness more oppressive. The dim roar of London was like the bourdon note of a distant organ.",
        createdAt: "10/23/2002",
        updatedAt: "11/5/2002",
        categories: ["new", "trending", "fart", "joy"],
        likes: 34,
        comments: 50,
        readTime: 2,
      },
      {
        _id: "37afk",
        title: "Chapter 4",
        body: "From the corner of the divan of Persian <br/> saddle-bags on which he was lying, smoking, as was his custom, innumerable cigarettes, Lord Henry Wotton could just catch the gleam of the honey-sweet and honey-coloured blossoms of a laburnum, whose tremulous branches seemed hardly able to bear the burden of a beauty so flamelike as theirs; and now and then the fantastic shadows of birds in flight flitted across the long tussore-silk curtains that were stretched in front of the huge window, producing a kind of momentary Japanese effect, and making him think of those pallid, jade-faced painters of Tokyo who, through the medium of an art that is necessarily immobile, seek to convey the sense of swiftness and motion. The sullen murmur of the bees shouldering their way through the long unmown grass, or circling with monotonous insistence round the dusty gilt horns of the straggling woodbine, seemed to make the stillness more oppressive. The dim roar of London was like the bourdon note of a distant organ.",
        createdAt: "10/23/2002",
        updatedAt: "11/5/2002",
        categories: ["new", "trending", "fart", "joy"],
        likes: 34,
        comments: 50,
        readTime: 2,
      },
    ];

    return res
      .status(200)
      .json({ message: "Blogs Fetched successfully!", blogs: data });
  } catch (error) {
    console.log("Error in fetching the blogs", error);
    return res.status(500).json({ message: "Internal Server Error!" });
  }
};

export const PostBlog = async (req, res) => {
  try {
  } catch (error) {
    console.log("Error in posting the blog", error);
    return res.status(500).json({ message: "Internal Server Error!" });
  }
};
