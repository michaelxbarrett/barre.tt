"use strict";

var app = {
	"Skills": [{ name: "XCode", image_url: "images/XcodeIcon.png" }, { name: "Swift", image_url: "images/SwiftIcon.png" }, { name: "ObjC", image_url: "images/ObjCIcon.png" }],
	"Job History": [{ name: "LinkedIn", image_url: "images/linkedin.png", link: "https://www.linkedin.com/in/michaelxbarrett/" }],
	"Follow Me": [{ name: "Instagram", image_url: "images/InstagramIcon.png", link: "https://instagram.com/miketotheworld" }, { name: "Twitter", image_url: "images/TwitterIcon.png", link: "https://twitter.com/bunandcheese_" }],
	"Music": [{ name: "Soundcloud", image_url: "images/SoundcloudLogo.jpg", link: "https://soundcloud.com/capricorndon" }],
	"Dock": [{ image_url: "images/PhoneIcon.png", link: "tel://1-973-897-2538" }, { image_url: "images/EmailIcon.png", link: "mailto:michaelxbarrett@gmail.com" }]
};

function PhoneBackground(props) {
	return React.createElement(
		"div",
		{ id: "phone-background" },
		React.createElement("img", { src: "images/mike.png" })
	);
}

function PhoneFrameWithBackground(props) {
	return React.createElement(
		"div",
		{ id: "phone-frame-with-background" },
		React.createElement("img", { src: "images/iphone14_with_background.png" })
	);
}

function PhoneFrame(props) {
	return React.createElement(
		"div",
		{ id: "phone-frame" },
		React.createElement("img", { src: "images/iphone14.png" })
	);
}

function BottomDock(props) {
	var dockIcons = app["Dock"].map(function (icon) {
		return React.createElement(AppIcon, { link: icon.link, image_url: icon.image_url, name: icon.name, key: icon.name });
	});

	return React.createElement(
		"div",
		{ id: "phone-dock" },
		dockIcons
	);
}

function Phone(props) {
	function onClick(e) {
		$("#app-group").css("opacity", 0);
		$("#app-group").addClass("app_group_collapsed");
		$("#overlay").hide();
		$("#overlay").css("z-index", "");
		$("#phone-frame").css("z-index", "");
	}

	var skillIcons = app["Skills"].map(function (skill) {
		return React.createElement(AppIcon, { image_url: skill.image_url, name: skill.name, key: skill.name });
	});
	var jobIcons = app["Job History"].map(function (skill) {
		return React.createElement(AppIcon, { image_url: skill.image_url, name: skill.name, key: skill.name, link: skill.link });
	});
	var socialIcons = app["Follow Me"].map(function (skill) {
		return React.createElement(AppIcon, { image_url: skill.image_url, name: skill.name, key: skill.name, link: skill.link });
	});
	var musicIcons = app["Music"].map(function (skill) {
		return React.createElement(AppIcon, { image_url: skill.image_url, name: skill.name, key: skill.name, link: skill.link });
	});

	return React.createElement(
		"div",
		{ id: "iphone", onClick: onClick },
		React.createElement(BottomDock, null),
		React.createElement(AppGroupIcon, { name: "Skills", children: skillIcons }),
		React.createElement(AppGroupIcon, { name: "Job History", children: jobIcons }),
		React.createElement(AppGroupIcon, { name: "Follow Me", children: socialIcons }),
		React.createElement(AppGroupIcon, { name: "Music", children: musicIcons }),
		React.createElement(Overlay, { children: React.createElement(AppFolderPopup, null) }),
		React.createElement(PhoneFrameWithBackground, null),
		React.createElement(PhoneFrame, null)
	);
}

function Overlay(props) {
	return React.createElement(
		"div",
		{ id: "overlay" },
		props.children
	);
}

function AppGroupIcon(props) {
	function onClick(e) {
		e.stopPropagation();

		$("#app-group").show();
		openAppFolderPopup();
		var position = $(e.currentTarget).position();
		$("#app-group").css("opacity", 1);
		$("#app-group").removeClass("app_group_collapsed");
		$("#overlay").show();
		$("#overlay").css("z-index", "50");
		$("#phone-frame").css("z-index", "100");
	}

	function onMouseDown(e) {
		$(e.currentTarget).css("filter", "brightness(50%)");
	}

	function onMouseUp(e) {
		$(e.currentTarget).css("filter", "");
	}

	function openAppFolderPopup() {
		ReactDOM.render(React.createElement(AppGroupContent, { children: props.children }), document.getElementById('app-group-content'));
	}

	var appIcons = app[props.name].map(function (skill) {
		return React.createElement(FolderPreviewAppIcon, { image_url: skill.image_url });
	});

	return React.createElement(
		"div",
		{ className: "app_icon hvr-pulse-shrink", onMouseDown: onMouseDown, onMouseOut: onMouseUp, onMouseUp: onMouseUp, onClick: onClick },
		React.createElement(
			"div",
			{ className: "app_image_container" },
			React.createElement(FolderPreview, { children: appIcons })
		),
		React.createElement(
			"p",
			null,
			props.name
		)
	);
}

function FolderPreviewAppIcon(props) {
	return React.createElement(
		"div",
		{ className: "folder_preview_app_icon" },
		React.createElement("img", { src: props.image_url })
	);
}

function FolderPreview(props) {
	return React.createElement(
		"div",
		{ className: "folder_preview" },
		props.children
	);
}

function AppIcon(props) {
	function onClick(e) {
		if (props.link) {
			window.location.href = props.link;
		}
	}
	return React.createElement(
		"div",
		{ onClick: onClick, className: "app_icon " + (!!props.link && "hvr-pulse-shrink") },
		React.createElement(
			"div",
			{ className: "app_image_container" },
			React.createElement("img", { src: props.image_url })
		),
		React.createElement(
			"p",
			null,
			props.name
		)
	);
}

function AppGroupContent(props) {

	function onClick(e) {
		e.stopPropagation();
	}
	return React.createElement(
		"div",
		{ onClick: onClick, id: "app-group-content" },
		props.children
	);
}

function AppGroup(props) {
	return React.createElement(
		React.Fragment,
		null,
		React.createElement(AppGroupContent, { children: [React.createElement(AppIcon, { name: "App Name", key: "app1" })] }),
		React.createElement("div", { className: "app-group-background" })
	);
}

function AppFolderPopup(props) {
	return React.createElement(
		"div",
		{ id: "app-group", className: "app_group_collapsed" },
		React.createElement(AppGroup, null),
		React.createElement("div", { className: "app-group-background" })
	);
}

ReactDOM.render(React.createElement(Phone, null), document.getElementById('iphone_demo'), function (x) {
	return $("#overlay").hide();
});