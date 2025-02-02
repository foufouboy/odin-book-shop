import styled from "styled-components";
import { getCategoryName } from "./category-cards-data";
import getFilteredBooks from "./filtering-functions";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import BabelCarousel from "./BabelCarousel";
import SearchError from "./SearchError";
import FilterDropdown from "./FilterDropdown";
import BookCard from "./BookCard";
import LoadingAnimation from "../../components/LoadingAnimation";
import withAnimation from "../../components/withAnimation";
import Description from "./Description";

const InnerLibrary = ({ data, setters }) => {
	const {
		descOpen,
		searchData: { currentCategory, filter, currentBooks },
		apiStatus: { error, loading },
	} = data;

	const { setDescOpen, setCurrentCategory, setFilter, setTrigger } = setters;

	const displayedBooks = getFilteredBooks(currentBooks, filter);
	const navigate = useNavigate();

	const handleCategoryClick = (e) => {
		const category = e.target.getAttribute("data-value");

		if (category === currentCategory) {
			setCurrentCategory(null);
		} else {
			setCurrentCategory(category);
		}

		setTrigger();
	};

	const handleFilterChange = (e) => {
		const filter = e.target.textContent;

		console.log(filter);

		filter === "Name"
			? setFilter("name")
			: filter === "Rating"
			? setFilter("rating")
			: filter === "Date"
			? setFilter("date")
			: setFilter("pertinence");
	};

	return (
		<StyledInnerLibrary
			initial={{ opacity: 0, x: -25 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.6 }}
			exit={{ opacity: 0, x: -25 }}
		>
			{descOpen && (
				<Description toggleHandler={() => setDescOpen(false)} />
			)}
			<BabelCarousel
				handleCategoryClick={handleCategoryClick}
				currentCategory={currentCategory}
			/>
			<section className="results">
				<h2>{getCategoryName(currentCategory)}</h2>
				<FilterDropdown
					handleFilterChange={handleFilterChange}
					filter={filter}
				/>
				{error ? (
					<SearchError error={error} />
				) : loading ? (
					<LoadingAnimation />
				) : (
					<div className="cards">
						{currentBooks.length ? (
							displayedBooks.map((book, i) => (
								<BookCard
									onClick={() => navigate("book/" + book.id)}
									key={book.id}
									book={book}
								/>
							))
						) : (
							<p className="no-results">
								Either no results or you didn't search anything
								:)
							</p>
						)}
					</div>
				)}
			</section>
		</StyledInnerLibrary>
	);
};

const StyledInnerLibrary = styled(motion.div)`
	.results {
		margin-top: 25px;
		padding: 30px;
		background: #002a48;

		h2 {
			font-size: 3.5rem;
			margin-bottom: 5px;
		}
	}

	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		margin: 0 auto;
		margin-top: 20px;
		gap: 40px;
	}

	.no-results {
		padding: 10px 0;
		padding-left: 5px;
		font-size: 1.5rem;
		font-family: "Source Code Pro";
		opacity: 0.8;
		width: 340px;
	}

	@media (max-width: 500px) {
		padding-bottom: 0;

		.cards {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.results {
			margin-left: -25px;
			margin-right: -25px;

			h2 {
				font-size: 2rem;
			}
		}

		.no-results {
			font-size: 1.2rem;
		}
	}
`;

export default withAnimation(InnerLibrary);
