function BioImageView(props) {
	return React.createElement(
		"div",
		{ id: "bio_image_view" },
		React.createElement(BioImage, { image_url: props.image_url })
	);
}

function BioImage(props) {
	return React.createElement("img", { src: props.image_url });
}

function BioText(props) {
	return React.createElement(
		"span",
		null,
		props.text
	);
}

function BioInteractiveText(props) {
	function underline(e) {
		$(".bio_interactive_text").css("visibility", "visible");
	}

	function removeUnderline(e) {
		$(".bio_interactive_text").removeClass("underlined");
		$(".bio_interactive_text").addClass("not_underlined");
	}

	function hideImage(e) {
		$("#bio_image_view").css("transform", "translate3d(0px, 1000px, -1000px)");
		$("#bio_image_view").fadeOut();
	}

	function showImage(e) {
		$("#bio_image_view > img").attr("src", props.image_url);
		$("#bio_image_view").css("transform", "perspective(500px) translate3d(0px, 0px, 0px)");
		$("#bio_image_view").fadeIn();
	}

	function onMouseEnter(e) {
		removeUnderline(e);
		showImage(e);
	}

	function onMouseLeave(e) {
		underline(e);
		hideImage(e);
	}

	return React.createElement(
		"span",
		{ onMouseLeave: onMouseLeave, onMouseEnter: onMouseEnter, className: "bio_interactive_text" },
		props.text
	);
}

function Bio() {
	return React.createElement(
		"div",
		{ id: "bio" },
		React.createElement(
			"h1",
			null,
			React.createElement(BioInteractiveText, { text: "Michael Barrett", image_url: "mike.png" }),
			React.createElement(BioText, { text: " is a Software Engineer based in the " }),
			React.createElement(BioInteractiveText, { text: "Bay Area", image_url: "BarrettBayBridge.jpg" }),
			React.createElement(BioText, { text: " currently working at " }),
			React.createElement(BioInteractiveText, { text: "Medium.", image_url: "BarrettMedium.jpg" })
		),
		React.createElement(
			"div",
			{ id: "bio_background" },
			React.createElement(
				"h1",
				null,
				"Barrett."
			)
		)
	);
}

function FeaturedSection() {
	return React.createElement(
		"div",
		{ id: "featured_section" },
		React.createElement(Bio, null)
	);
}

ReactDOM.render(React.createElement(FeaturedSection, null), document.getElementById('featured_bio'));