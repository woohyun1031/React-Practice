import { useNavigate } from 'react-router-dom';
import { Grid, Image, Text } from '../elements/index';
import { displayDate } from '../shared/common';

type PostProps = {
	id?: string;
	user_info?: {
		user_name?: string;
		user_profile?: string;
		user_id?: string;
	};
	image_url?: string;
	contents?: string;
	comment_cnt?: number;
	insert_dt?: number;
};

const Post = (props: PostProps) => {
	const { id, user_info, image_url, contents, comment_cnt, insert_dt } = props;
	const navigate = useNavigate();
	return (
		<>
			<Grid margin='5px' width='250px'>
				<Grid border margin='10px 0px'>
					<Grid is_flex padding='16px'>
						<Grid is_flex>
							<Image shape={'circle'} src={user_info?.user_profile} size={45} />
							<Text bold>{user_info?.user_name}</Text>
						</Grid>
						<Text bold>{insert_dt && displayDate(insert_dt)}</Text>
					</Grid>

					<Grid padding='16px'>
						<Image
							shape={'rectangle'}
							src={image_url}
							callback={() => {
								navigate(`/post/${id}`);
								console.log('image click!!');
							}}
						/>
					</Grid>
					<Grid padding='16px'>
						<Text>{contents}</Text>
					</Grid>
					<Grid padding='16px'>
						<Text bold>댓글 {comment_cnt}개</Text>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default Post;
