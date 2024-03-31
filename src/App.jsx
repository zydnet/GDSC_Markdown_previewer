import { marked } from "marked";
import { useState } from "react";

marked.setOptions({
	breaks: true,
});

const Toolbar = (props) => {
	return <div className="toolbar">{props.text}</div>;
};

const Editor = (props) => {
	return (
		<textarea
			id="editor"
			value={props.markdown}
			onChange={props.onChange}
			type="text"
		/>
	);
};

const Previewer = (props) => {
	const renderer = new marked.Renderer();
	return (
		<div
			id="previewer"
			dangerouslySetInnerHTML={{
				__html: marked(props.markdown, { renderer: renderer }),
			}}
		/>
	);
};

function App() {
	const placeholder = `
# Hello GDSC!

![GDSC Logo](https://res.cloudinary.com/startup-grind/image/upload/dpr_2.0,fl_sanitize/v1/gcs/platform-data-dsc/contentbuilder/logo_dark_stacked_5giak2X.svg)

# Welcome to my React Markdown Previewer!

## This is a sub-heading...

I need to highlight these <mark>very important words</mark>.

###feel free to try on your own 
  

`;

	const [markdown, setMarkdown] = useState(placeholder);

	const handleChange = (e) => {
		setMarkdown(e.target.value);
	};

	return (
		<div>
			<h1 className="title">React Markdown Previewer</h1>
			<div className="AppWrap">
				<div className="EditorWrap">
					<Toolbar text="Editor" />
					<Editor markdown={markdown} onChange={handleChange} />
				</div>
				<div className="PreviewerWrap">
					<Toolbar text="Previewer" />
					<Previewer markdown={markdown} />
				</div>
			</div>
		</div>
	);
}

export default App;
