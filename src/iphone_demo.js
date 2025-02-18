const app = {
	"my app": [
	{name: "granny seh", image_url: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/c1/77/1c/c1771c92-21cd-51f9-baa1-feb666eb4c03/AppIcon-0-0-1x_U007ephone-0-85-220.png/460x0w.webp"}
	],
	"skills": [
	{name: "xcode", image_url: "images/XcodeIcon.png"},
	{name: "swift", image_url: "images/SwiftIcon.png"},
	{name: "objc", image_url: "images/ObjCIcon.png"}
	],
	"job history": [
	{ name: "medium", image_url: "images/medium_logo.png", link: "https://www.linkedin.com/in/michaelxbarrett/" },
	{ name: "clubhouse", image_url: "images/clubhouse_logo.png", link: "https://www.linkedin.com/in/michaelxbarrett/" },
	],
	"socials": [
	{name: "instagram", image_url: "images/InstagramIcon.png", link: "https://instagram.com/miketotheworld"},
	{name: "twitter", image_url: "images/TwitterIcon.png", link:"https://twitter.com/bunandcheese_"},
	],
	"music": [
	{name: "Soundcloud", image_url: "images/SoundcloudLogo.jpg", link: "https://soundcloud.com/capricorndon"},
	],
	"Dock": [
	{image_url: "images/PhoneIcon.png", link: "tel://1-973-897-2538"},
	{image_url: "images/EmailIcon.png", link:"mailto:michaelxbarrett@gmail.com"},
	]
}

function PhoneBackground(props) {
	return (
		<div id="phone-background">
		<img src="images/mike.png"/>
		</div>
		)
}


function PhoneFrameWithBackground(props) {
	return (
		<div id="phone-frame-with-background">
		<img src="images/iphone14_with_background.png"/>
		</div>
		)
}

function PhoneFrame(props) {
	return (
		<div id="phone-frame">
		<img src="images/iphone14.png"/>
		</div>
		)
}

function BottomDock(props) {
	const dockIcons = app["Dock"].map((icon) =>
		<AppIcon link={icon.link} image_url={icon.image_url} name={icon.name} key={icon.name}/>
		)

	return (
		<div id="phone-dock">
		{dockIcons}
		</div>
		)
}


function Phone(props) {
	function onClick(e) {
		$("#app-group").css("opacity", 0)
		$("#app-group").addClass("app_group_collapsed")
		$("#overlay").hide()
		$("#overlay").css("z-index", "")
		$("#phone-frame").css("z-index", "")
	}	
	const myAppIcons = app["skills"].map((skill) =>
		<AppIcon image_url={skill.image_url} name={skill.name} key={skill.name}/>
		)
	const skillIcons = app["skills"].map((skill) =>
		<AppIcon image_url={skill.image_url} name={skill.name} key={skill.name}/>
		)
	const jobIcons = app["job history"].map((skill) =>
		<AppIcon image_url={skill.image_url} name={skill.name} key={skill.name} link={skill.link}/>
		)
	const socialIcons = app["follow me"].map((skill) =>
		<AppIcon image_url={skill.image_url} name={skill.name} key={skill.name} link={skill.link}/>
		)
	const musicIcons = app["music"].map((skill) =>
		<AppIcon image_url={skill.image_url} name={skill.name} key={skill.name} link={skill.link}/>
		)


	return (
		<div id="iphone" onClick={onClick}>
		{/* <PhoneBackground/> */}
		<BottomDock/>
		<AppGroupIcon name="my app" children={ 
			myAppIcons
		}/>
		<AppGroupIcon name="skills" children={ 
			skillIcons
		}/>
		<AppGroupIcon name="job history" children={ 
			jobIcons 
		}/>
		<AppGroupIcon name="socials" children={ 
			socialIcons 
		}/>
		<AppGroupIcon name="music" children={ 
			musicIcons 
		}/>
		<Overlay children={
			<AppFolderPopup/>
		}/>
		<PhoneFrameWithBackground/>
		<PhoneFrame/>
		
		</div>
		)
}

function Overlay(props) {
	return <div id="overlay">{props.children}</div>
}

function AppGroupIcon(props) {
	function onClick(e) {
		e.stopPropagation();

		$("#app-group").show()			
		openAppFolderPopup()
		$("#app-group").css("opacity", 1)
		$("#app-group").removeClass("app_group_collapsed")
		$("#overlay").show()
		$("#overlay").css("z-index", "50")
		$("#phone-frame").css("z-index", "100")
	}

	function onMouseDown(e) {
		$(e.currentTarget).css("filter", "brightness(50%)")
	}

	function onMouseUp(e) {
		$(e.currentTarget).css("filter", "")
	}

	function openAppFolderPopup() {
		ReactDOM.render(
			<AppGroupContent children={
				props.children
			}/>,
			document.getElementById('app-group-content')
			);
	}

	const appIcons = app[props.name].map((skill) =>
		<FolderPreviewAppIcon image_url={skill.image_url}/>
		)

	return <div className="app_icon hvr-pulse-shrink" onMouseDown={onMouseDown} onMouseOut={onMouseUp} onMouseUp={onMouseUp} onClick={onClick}><div className="app_image_container">
	<FolderPreview children={
		appIcons
	}/>
	</div>
	<p>{props.name}</p>
	</div>
}

function FolderPreviewAppIcon(props) {
	return <div className="folder_preview_app_icon"><img src={props.image_url}/></div>
}

function FolderPreview(props) {
	return <div className="folder_preview">{props.children}</div>
}

function AppIcon(props) {
	function onClick(e) {
		if (props.link) {
			window.location.href = props.link
		}
	}
	return <div onClick={onClick} className={`app_icon ${!!props.link && "hvr-pulse-shrink"}`}><div className="app_image_container"><img src={props.image_url}/></div><p>{props.name}</p></div>
}


function AppGroupContent(props) {

	function onClick(e) {
		e.stopPropagation();
	}
	return <div onClick={onClick} id="app-group-content">{props.children}</div>
}

function AppGroup(props) {
	return (
		<React.Fragment>
		<AppGroupContent children={
			[<AppIcon name="App Name" key="app1"/>]
		}/>
		<div className="app-group-background"></div>
		</React.Fragment>
		)
}

function AppFolderPopup(props) {
	return ( 
		<div id="app-group" className="app_group_collapsed">
		<AppGroup/>
		<div className="app-group-background"></div>
		</div>
		);
}

ReactDOM.render(
	<Phone />,
	document.getElementById('iphone_demo'), ((x) => 
		$("#overlay").hide()
		)
	);
