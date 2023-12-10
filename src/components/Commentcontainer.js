import React from "react";
const Commentdata = [
  {
    name: "sid",
    comments: "nvdknf juaefnafi",
    replies: [
      { name: "sid", comments: "nvdknf juaefnafi", replies: [] },
      {
        name: "sid",
        comments: "nvdknf juaefnafi",
        replies: [
          { name: "sid", comments: "nvdknf juaefnafi", replies: [] },
          { name: "sid", comments: "nvdknf juaefnafi", replies: [] },
        ],
      },
    ],
  },
  {
    name: "sid",
    comments: "nvdknf juaefnafi",
    replies: [
      { name: "sid", comments: "nvdknf juaefnafi", replies: [] },
      { name: "sid", comments: "nvdknf juaefnafi", replies: [] },
    ],
  },
  { name: "sid", comments: "nvdknf juaefnafi", replies: [] },
  {
    name: "sid",
    comments: "nvdknf juaefnafi",
    replies: [
      { name: "sid", comments: "nvdknf juaefnafi", replies: [] },
      { name: "sid", comments: "nvdknf juaefnafi", replies: [] },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, comments, replies } = data;
  return (
    <div className=" flex">
      <div>
        <img
          className=" h-10 w-10 mt-2"
          alt="userimg"
          src="https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png"
        />
      </div>
      <div className="m-1 p-1">
        <p className="font-bold">{name}</p>
        <p>{comments}</p>
      </div>
    </div>
  );
};

const Commentlist = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />

      <div className=" pl-5 border-l-black ml-4">
        <Commentlist comments={comment.replies} />
      </div>
    </div>
  ));
};

const Commentcontainer = () => {
  return (
    <div>
      <Commentlist comments={Commentdata} />
    </div>
  );
};

export default Commentcontainer;
