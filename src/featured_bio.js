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

	function hideImage(e) {
		$("#bio_image_view").css("transform", "translate3d(0px, 1000px, -1000px)")
		$("#bio_image_view").fadeOut()
	}

	function showImage(e) {
		$("#bio_image_view > img").attr("src", props.image_url)
		$("#bio_image_view").css("transform", "perspective(500px) translate3d(0px, 0px, 0px)")
		$("#bio_image_view").fadeIn()
	}

	function onMouseEnter(e) {
		removeUnderline(e)
		showImage(e)
	}

	function onMouseLeave(e) {
		underline(e)
		hideImage(e)
	}

	return <span onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter} className="bio_interactive_text">{props.text}</span>;
}

function Bio() {
	return (
		<div id="bio">
		<h1>
		<BioInteractiveText text="Michael Barrett" image_url="mike.png"/>
		<BioText text=" is a Software Engineer based in the "/>
		<BioInteractiveText text="Bay Area" image_url="BarrettBayBridge.jpg"/>
		<BioText text=" currently working at "/>
		<BioInteractiveText text="Medium." image_url="BarrettMedium.jpg"/>
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
