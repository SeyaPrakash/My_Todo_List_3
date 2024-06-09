import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { DtailPostBoxLayout,DtailPostBox,UpSide,DownSide } from '../styles/styles';

function Detail({ item }) {
  const params = useParams();
 
  const posts = useSelector((state) => {
    return state.posts;
  });

  const foundData = posts.find((item) => {
    return item.id === parseInt(params.id);
  });

  const navigate = useNavigate();

  return (
    <DtailPostBoxLayout>
      <DtailPostBox>
        <UpSide>
          <div>ID: {foundData.id}</div>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Back
          </button>
        </UpSide>
        <DownSide>
          <h1>{foundData.title}</h1>
          <p>{foundData.content}</p>
        </DownSide>
      </DtailPostBox>
    </DtailPostBoxLayout>
  );
}

export default Detail;
