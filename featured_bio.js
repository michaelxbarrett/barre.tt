"use strict";

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

	function showImage(e) {
		var phoneBackground = $("#phone-background > img");
		if (phoneBackground.attr("src") == props.image_url) {
			return;
		}
		phoneBackground.fadeOut(400, function () {
			phoneBackground.attr("src", props.image_url);
		}).fadeIn(400);
	}

	function onMouseEnter(e) {
		removeUnderline(e);
		showImage(e);
	}

	function onMouseLeave(e) {
		underline(e);
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
			React.createElement(BioText, { text: "Hi, I'm Michael Barrett! I'm a software engineer based in the NYC area, currently building Clubhouse \uD83D\uDC4B." })
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