import React,{useState} from 'react';

const TagsInput = () => {
    const [tags, setTags] = useState([]);
    const removeTags = index => {
        setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
    };
    const addTags = event => {
        if (event.key === "Enter" && event.target.value !== "") {
            setTags([...tags, event.target.value]);
            props.selectedTags([...tags, event.target.value]);
            event.target.value = "";
        }
    };

    return (
        <div className="tags-input">
            <ul>
                {tags.map((tag, index) => (
                    <li key={index}>
                        <span>{tag}</span>
                        <i className="material-icons">close</i>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                placeholder="Press enter to add tags"
            />
        </div>
    );
};
export default TagsInput;