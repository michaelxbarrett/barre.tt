const app = {
	"Skills": [
	{name: "XCode", image_url: "XcodeIcon.png"},
	{name: "Swift", image_url: "SwiftIcon.png"},
	{name: "ObjC", image_url: "ObjCIcon.png"}
	],
	"Job History": [
	{name: "Medium", image_url: "MediumIcon.png"},
	],
	"Follow Me": [
	{name: "Instagram", image_url: "InstagramIcon.png"},
	{name: "Twitter", image_url: "TwitterIcon.png"},
	]
}


function Phone(props) {
	function onClick(e) {
		$("#app-group").css("opacity", 0)
		$("#app-group").addClass("app_group_collapsed")
	}	

	const skillIcons = app["Skills"].map((skill) =>
		<AppIcon image_url={skill.image_url} name={skill.name} key={skill.name}/>
		)
	const jobIcons = app["Job History"].map((skill) =>
		<AppIcon image_url={skill.image_url} name={skill.name} key={skill.name}/>
		)
	const socialIcons = app["Follow Me"].map((skill) =>
		<AppIcon image_url={skill.image_url} name={skill.name} key={skill.name}/>
		)
	return (
		<div id="iphone" onClick={onClick}>
		<Overlay children={
			<SkillsGroup/>
		}/>
		<AppGroupIcon image_url="applogo.png" name="Skills" children={ 
			skillIcons
		}/>
		<AppGroupIcon image_url="applogo.png" name="Job History" children={ 
			jobIcons 
		}/>
		<AppGroupIcon image_url="applogo.png" name="Follow Me" children={ 
			socialIcons 
		}/>
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
		openSkillsGroup()
		const position = $(e.currentTarget).position()
		$("#app-group").css("opacity", 1)
		$("#app-group").removeClass("app_group_collapsed")
	}

	function onMouseDown(e) {
		$(e.currentTarget).css("filter", "brightness(50%)")
	}

	function onMouseUp(e) {
		$(e.currentTarget).css("filter", "")
	}

	function openSkillsGroup() {
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

	return <div className="app_icon" onMouseDown={onMouseDown} onMouseOut={onMouseUp} onMouseUp={onMouseUp} onClick={onClick}><div className="app_image_container">
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
	return <div className="app_icon"><div className="app_image_container"><img src={props.image_url}/></div><p>{props.name}</p></div>
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
			[<AppIcon image_url="applogo.png" name="App Name" key="app1"/>]
		}/>
		<div className="app-group-background"></div>
		</React.Fragment>
		)
}

function SkillsGroup(props) {
	return ( 
		<div id="app-group" className="app_group_collapsed">
		<AppGroup/>
		<div className="app-group-background"></div>
		</div>
		);
}

ReactDOM.render(
	<Phone />,
	document.getElementById('iphone_demo')
	);