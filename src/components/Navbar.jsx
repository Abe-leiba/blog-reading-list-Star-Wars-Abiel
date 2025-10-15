import { Link } from "react-router-dom";
// import useGlobalReducer from

export const Navbar = () => {
	const {store, dispatch} = useGlobalReducer();


	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">


				<Link to="/">
					<span className="navbar-brand mb-0 h1">Star Wars Reading Blog</span>
				</Link>


				<div className="ml-auto">
					<div className"btn-group">
					<button type="button" className="btn btn-info dropdown-toggle" data-bs-toggle="dropdown"
					aria-expanded="false">
						<Favorites></Favorites>
					</button>
					<ul className="dropdown-menu">
						
					</ul>
					<Link to="/demo">

						<Link to="/">
							<span className="navbar-brand mb-0 h1">Star Wars Reading Blog</span>
							</Link>



							<div className="ml-auto">
								<div class="btn-group">
									<button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown"
									aria-expanded="false">
										Favorites
									</button>
									<ul class="dropdown-menu">
										{
											StorageEvent.favorites.map(favorite => {

												return (
													<li key={`${favorite.uid}-${favorite.name}`}>
														<Link className="dropdown-item" to={`/profile-page/people/${favorite.uid}`}>
														{favorite.name}
													</Link>
												</li>
											</>

										)
									})
								}
							</ul>
						</div>
					</div>


				</div>
			</nav>