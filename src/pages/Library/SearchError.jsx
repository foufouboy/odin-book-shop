import styled from "styled-components";

const SearchError = ({ error }) => {
	return (
		<StyledSearchError>
			<div>
				<p className="oops">:/</p>
				<p className="message">
					Something went wrong with the request.
					<br />
					You can try again later <br />
					(or go fix the bug if you're the lazy dev i'm thinking of).
				</p>
				<p className="error">{error.message}</p>
			</div>
		</StyledSearchError>
	);
};

const StyledSearchError = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	flex-flow: column;
	font-family: "Source Code Pro";

	& > div {
		max-width: 400px;
	}

	.oops {
		margin-top: 15px;
		font-size: 6rem;
		font-weight: bold;
		color: var(--dark-grey);
	}

	.error {
		font-style: italic;
		color: crimson;
		margin-bottom: 0;
	}

	.message {
		color: var(--peach);
		opacity: 0.8;
	}

	p {
		font-size: 1.1rem;
		margin-bottom: 30px;
	}
`;

export default SearchError;
