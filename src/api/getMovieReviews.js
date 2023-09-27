import axios from "axios";
import { options } from "./options";

export const getMovieReviews = async (movieId) => {
	const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews`, options);

	return response.data;
};
