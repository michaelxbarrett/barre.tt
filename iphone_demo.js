"use strict";

var app = {
  "my app": [{
    name: "granny seh",
    image_url: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/c1/77/1c/c1771c92-21cd-51f9-baa1-feb666eb4c03/AppIcon-0-0-1x_U007ephone-0-85-220.png/460x0w.webp",
    link: "https://apps.apple.com/zw/app/granny-seh/id6478697103"
  }],
  "skills": [{
    name: "xcode",
    image_url: "images/XcodeIcon.png"
  }, {
    name: "swift",
    image_url: "images/SwiftIcon.png"
  }, {
    name: "objc",
    image_url: "images/ObjCIcon.png"
  }],
  "job history": [{
    name: "medium",
    image_url: "images/medium_logo.png",
    link: "https://www.linkedin.com/in/michaelxbarrett/"
  }, {
    name: "clubhouse",
    image_url: "images/clubhouse_logo.png",
    link: "https://www.linkedin.com/in/michaelxbarrett/"
  }],
  "socials": [{
    name: "instagram",
    image_url: "images/InstagramIcon.png",
    link: "https://instagram.com/miketotheworld"
  }, {
    name: "twitter",
    image_url: "images/TwitterIcon.png",
    link: "https://twitter.com/bunandcheese_"
  }],
  "music": [{
    name: "Soundcloud",
    image_url: "images/SoundcloudLogo.jpg",
    link: "https://soundcloud.com/capricorndon"
  }],
  "dock": [{
    image_url: "images/PhoneIcon.png",
    link: "tel://1-973-897-2538"
  }, {
    image_url: "images/EmailIcon.png",
    link: "mailto:michaelxbarrett@gmail.com"
  }]
};
function PhoneBackground(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "phone-background"
  }, /*#__PURE__*/React.createElement("img", {
    src: "images/mike.png"
  }));
}
function PhoneFrameWithBackground(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "phone-frame-with-background"
  }, /*#__PURE__*/React.createElement("img", {
    src: "images/iphone14_with_background.png"
  }));
}
function PhoneFrame(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "phone-frame"
  }, /*#__PURE__*/React.createElement("img", {
    src: "images/iphone14.png"
  }));
}
function BottomDock(props) {
  var dockIcons = app["dock"].map(function (icon) {
    return /*#__PURE__*/React.createElement(AppIcon, {
      link: icon.link,
      image_url: icon.image_url,
      name: icon.name,
      key: icon.name
    });
  });
  return /*#__PURE__*/React.createElement("div", {
    id: "phone-dock"
  }, dockIcons);
}
function Phone(props) {
  function onClick(e) {
    $("#app-group").css("opacity", 0);
    $("#app-group").addClass("app_group_collapsed");
    $("#overlay").hide();
    $("#overlay").css("z-index", "");
    $("#phone-frame").css("z-index", "");
  }
  var myAppIcons = app["my app"].map(function (skill) {
    return /*#__PURE__*/React.createElement(AppIcon, {
      image_url: skill.image_url,
      name: skill.name,
      key: skill.name,
      link: skill.link
    });
  });
  var skillIcons = app["skills"].map(function (skill) {
    return /*#__PURE__*/React.createElement(AppIcon, {
      image_url: skill.image_url,
      name: skill.name,
      key: skill.name
    });
  });
  var jobIcons = app["job history"].map(function (skill) {
    return /*#__PURE__*/React.createElement(AppIcon, {
      image_url: skill.image_url,
      name: skill.name,
      key: skill.name,
      link: skill.link
    });
  });
  var socialIcons = app["socials"].map(function (skill) {
    return /*#__PURE__*/React.createElement(AppIcon, {
      image_url: skill.image_url,
      name: skill.name,
      key: skill.name,
      link: skill.link
    });
  });
  var musicIcons = app["music"].map(function (skill) {
    return /*#__PURE__*/React.createElement(AppIcon, {
      image_url: skill.image_url,
      name: skill.name,
      key: skill.name,
      link: skill.link
    });
  });
  return /*#__PURE__*/React.createElement("div", {
    id: "iphone",
    onClick: onClick
  }, /*#__PURE__*/React.createElement(BottomDock, null), /*#__PURE__*/React.createElement(AppGroupIcon, {
    name: "my app",
    children: myAppIcons
  }), /*#__PURE__*/React.createElement(AppGroupIcon, {
    name: "skills",
    children: skillIcons
  }), /*#__PURE__*/React.createElement(AppGroupIcon, {
    name: "job history",
    children: jobIcons
  }), /*#__PURE__*/React.createElement(AppGroupIcon, {
    name: "socials",
    children: socialIcons
  }), /*#__PURE__*/React.createElement(AppGroupIcon, {
    name: "music",
    children: musicIcons
  }), /*#__PURE__*/React.createElement(Overlay, {
    children: /*#__PURE__*/React.createElement(AppFolderPopup, null)
  }), /*#__PURE__*/React.createElement(PhoneFrameWithBackground, null), /*#__PURE__*/React.createElement(PhoneFrame, null));
}
function Overlay(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "overlay"
  }, props.children);
}
function AppGroupIcon(props) {
  function onClick(e) {
    e.stopPropagation();
    $("#app-group").show();
    openAppFolderPopup();
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
    ReactDOM.render(/*#__PURE__*/React.createElement(AppGroupContent, {
      children: props.children
    }), document.getElementById('app-group-content'));
  }
  var appIcons = app[props.name].map(function (skill) {
    return /*#__PURE__*/React.createElement(FolderPreviewAppIcon, {
      image_url: skill.image_url
    });
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "app_icon hvr-pulse-shrink",
    onMouseDown: onMouseDown,
    onMouseOut: onMouseUp,
    onMouseUp: onMouseUp,
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "app_image_container"
  }, /*#__PURE__*/React.createElement(FolderPreview, {
    children: appIcons
  })), /*#__PURE__*/React.createElement("p", null, props.name));
}
function FolderPreviewAppIcon(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "folder_preview_app_icon"
  }, /*#__PURE__*/React.createElement("img", {
    src: props.image_url
  }));
}
function FolderPreview(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "folder_preview"
  }, props.children);
}
function AppIcon(props) {
  function onClick(e) {
    if (props.link) {
      window.location.href = props.link;
    }
  }
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    className: "app_icon ".concat(!!props.link && "hvr-pulse-shrink")
  }, /*#__PURE__*/React.createElement("div", {
    className: "app_image_container"
  }, /*#__PURE__*/React.createElement("img", {
    src: props.image_url
  })), /*#__PURE__*/React.createElement("p", null, props.name));
}
function AppGroupContent(props) {
  function onClick(e) {
    e.stopPropagation();
  }
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    id: "app-group-content"
  }, props.children);
}
function AppGroup(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AppGroupContent, {
    children: [/*#__PURE__*/React.createElement(AppIcon, {
      name: "App Name",
      key: "app1"
    })]
  }), /*#__PURE__*/React.createElement("div", {
    className: "app-group-background"
  }));
}
function AppFolderPopup(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "app-group",
    className: "app_group_collapsed"
  }, /*#__PURE__*/React.createElement(AppGroup, null), /*#__PURE__*/React.createElement("div", {
    className: "app-group-background"
  }));
}
ReactDOM.render(/*#__PURE__*/React.createElement(Phone, null), document.getElementById('iphone_demo'), function (x) {
  return $("#overlay").hide();
});
