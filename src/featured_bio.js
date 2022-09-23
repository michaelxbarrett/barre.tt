function BioImageView(props) {
	return <div id="bio_image_view"><BioImage image_url={props.image_url}/></div>
}

function BioImage(props) {
	return <img src={props.image_url}/>;
}

function BioText(props) {
	return <span>{props.text}</span>;
}

function BioInteractiveText(props) {
	function underline(e) {
		$(".bio_interactive_text").css("visibility","visible")
	}

	function removeUnderline(e) {
		$(".bio_interactive_text").removeClass("underlined")
		$(".bio_interactive_text").addClass("not_underlined")
	}

	function showImage(e) {
		const phoneBackground = $("#phone-background > img")
		if (phoneBackground.attr("src") == props.image_url) {
			return
		}
		phoneBackground.fadeOut(400, function() {
			phoneBackground.attr("src", props.image_url)

		})
		.fadeIn(400);
	}

	function onMouseEnter(e) {
		removeUnderline(e)
		showImage(e)
	}

	function onMouseLeave(e) {
		underline(e)
	}

	return <span onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter} className="bio_interactive_text">{props.text}</span>;
}

function Bio() {
	return (
		<div id="bio">
		<h1>
		{/* <BioInteractiveText text="Michael Barrett" image_url="images/mike.png"/> */}
		<BioText text="Hi, I'm Michael Barrett! I'm a software engineer based in the NYC area, currently building Clubhouse 👋. Use the phone to learn more about me."/>
		</h1>
		<div id="bio_background">
		<h1>Barrett.</h1>
		</div>
		</div>
		);
}

function FeaturedSection() {
	return (
		<div id="featured_section">
		<Bio />
	{ /* <BioImageView /> */ }
	</div>
	);
}

ReactDOM.render(
	<FeaturedSection />,
	document.getElementById('featured_bio'),
	);
