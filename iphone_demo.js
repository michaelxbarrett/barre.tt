var app = {
	"Skills": [{ name: "XCode", image_url: "XcodeIcon.png" }, { name: "Swift", image_url: "SwiftIcon.png" }, { name: "ObjC", image_url: "ObjCIcon.png" }],
	"Job History": [{ name: "Medium", image_url: "MediumIcon.png" }],
	"Follow Me": [{ name: "Instagram", image_url: "InstagramIcon.png" }, { name: "Twitter", image_url: "TwitterIcon.png" }]
};

function Phone(props) {
	function onClick(e) {
		$("#app-group").css("opacity", 0);
		$("#app-group").addClass("app_group_collapsed");
	}

	var skillIcons = app["Skills"].map(function (skill) {
		return React.createElement(AppIcon, { image_url: skill.image_url, name: skill.name, key: skill.name });
	});
	var jobIcons = app["Job History"].map(function (skill) {
		return React.createElement(AppIcon, { image_url: skill.image_url, name: skill.name, key: skill.name });
	});
	var socialIcons = app["Follow Me"].map(function (skill) {
		return React.createElement(AppIcon, { image_url: skill.image_url, name: skill.name, key: skill.name });
	});
	return React.createElement(
		"div",
		{ id: "iphone", onClick: onClick },
		React.createElement(Overlay, { children: React.createElement(SkillsGroup, null) }),
		React.createElement(AppGroupIcon, { image_url: "applogo.png", name: "Skills", children: skillIcons }),
		React.createElement(AppGroupIcon, { image_url: "applogo.png", name: "Job History", children: jobIcons }),
		React.createElement(AppGroupIcon, { image_url: "applogo.png", name: "Follow Me", children: socialIcons })
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
		openSkillsGroup();
		var position = $(e.currentTarget).position();
		$("#app-group").css("opacity", 1);
		$("#app-group").removeClass("app_group_collapsed");
	}

	function onMouseDown(e) {
		$(e.currentTarget).css("filter", "brightness(50%)");
	}

	function onMouseUp(e) {
		$(e.currentTarget).css("filter", "");
	}

	function openSkillsGroup() {
		ReactDOM.render(React.createElement(AppGroupContent, { children: props.children }), document.getElementById('app-group-content'));
	}

	var appIcons = app[props.name].map(function (skill) {
		return React.createElement(FolderPreviewAppIcon, { image_url: skill.image_url });
	});

	return React.createElement(
		"div",
		{ className: "app_icon", onMouseDown: onMouseDown, onMouseOut: onMouseUp, onMouseUp: onMouseUp, onClick: onClick },
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
	return React.createElement(
		"div",
		{ className: "app_icon" },
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
		React.createElement(AppGroupContent, { children: [React.createElement(AppIcon, { image_url: "applogo.png", name: "App Name", key: "app1" })] }),
		React.createElement("div", { className: "app-group-background" })
	);
}

function SkillsGroup(props) {
	return React.createElement(
		"div",
		{ id: "app-group", className: "app_group_collapsed" },
		React.createElement(AppGroup, null),
		React.createElement("div", { className: "app-group-background" })
	);
}

ReactDOM.render(React.createElement(Phone, null), document.getElementById('iphone_demo'));