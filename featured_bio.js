"use strict";

function BioImageView(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "bio_image_view"
  }, /*#__PURE__*/React.createElement(BioImage, {
    image_url: props.image_url
  }));
}
function BioImage(props) {
  return /*#__PURE__*/React.createElement("img", {
    src: props.image_url
  });
}
function BioText(props) {
  return /*#__PURE__*/React.createElement("span", null, props.text);
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
  return /*#__PURE__*/React.createElement("span", {
    onMouseLeave: onMouseLeave,
    onMouseEnter: onMouseEnter,
    className: "bio_interactive_text"
  }, props.text);
}
function Bio() {
  return /*#__PURE__*/React.createElement("div", {
    id: "bio"
  }, /*#__PURE__*/React.createElement("h1", null, /*#__PURE__*/React.createElement(BioText, {
    text: "\uD83D\uDCF2 use the phone to learn more about me."
  })));
}
function FeaturedSection() {
  return /*#__PURE__*/React.createElement("div", {
    id: "featured_section"
  }, /*#__PURE__*/React.createElement(Bio, null));
}
ReactDOM.render(/*#__PURE__*/React.createElement(FeaturedSection, null), document.getElementById('featured_bio'));
