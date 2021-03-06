import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import LikeDislike from "./LikeDislike";
import ReplyComment from "./ReplyComment";

function SingleCommnet(props) {
	const user = useSelector((state) => state.user);
	const [OpenReply, setOpenReply] = useState(false);
	const [ReplyValue, setReplyValue] = useState("");
	const [ReplySubmit, setReplySubmit] = useState("");

	const onClickReply = () => {
		setOpenReply(!OpenReply);
	};

	const onChangeReply = (event) => {
		let textValue = event.currentTarget.value.replace(/(?:\r\n|\r|\n)/g, "\n");
		setReplyValue(textValue);
	};

	const onSubmitReply = (event) => {
		event.preventDefault();

		let replyVariable = {
			content: ReplyValue,
			writer: user.userData._id,
			videoId: props.comment.videoId,
			responseTo: props.comment._id,
		};

		Axios.post("/api/comment/saveComment", replyVariable).then((response) => {
			if (response.data.success) {
				console.log(response.data.result);
			} else {
				alert("댓글 저장 실패");
			}
		});
	};

	return (
		<div className="main-comment">
			{props.comment.writer.image ? <img src={props.comment.writer.image} alt="아이콘" /> : <span className="icon">{user.userData.name.slice(0, 2)}</span>}

			<div className="txt-wrap">
				<p className="comment-writer">
					{props.comment.writer.name}
					<span className="date">1일 전</span>
				</p>
				<pre className="comment-desc">{props.comment.content}</pre>
				<div className="btn-box">
					<LikeDislike userId={user.userData._id} commentId={props.comment._id} />
					<button type="button" onClick={onClickReply}>
						답글
					</button>
				</div>
				{OpenReply && (
					<form onSubmit={onSubmitReply}>
						<input type="text" placeholder="공개 답글 추가..." onChange={onChangeReply} value={ReplyValue} />
						<button type="button" onClick={onSubmitReply}>
							댓글
						</button>
					</form>
				)}
				{/* <ReplyComment /> */}
			</div>
		</div>
	);
}

export default withRouter(SingleCommnet);
