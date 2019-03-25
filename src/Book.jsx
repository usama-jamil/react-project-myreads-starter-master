import React from 'react'

export default function Book(props) {
    return (<div className="book">
        <div className="book-top">
            <BookImg img={props.bookImg} />
            <div className="book-shelf-changer">
                <BookOptions />
            </div>
        </div>
        <div className="book-title">{props.bookTitle}</div>
        <div className="book-authors">{props.bookAuthor}</div>
    </div>)
}

const BookImg = props => (<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${props.img}")` }}></div>)

const BookOptions = () => (<select>
    <option value="move" disabled>Move to...</option>
    <option value="currentlyReading">Currently Reading</option>
    <option value="wantToRead">Want to Read</option>
    <option value="read">Read</option>
    <option value="none">None</option>
</select>)