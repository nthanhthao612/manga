import "../../../css/common/button.css"

export default function MDClickableText({ value }) {
    return <div className={"md clickable"} >
        <a href="#">
            <p>{value}</p>
        </a>
    </div>
}