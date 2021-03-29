import * as React from "react";
import Image from "next/image";

const MdRenderer = {
    paragraph: (props) => {
        const element = props.children[0];
        const {node, ...pProps} = props;
        return (element.type.name === 'image' || element.type.name === 'strong') ? { ...element } : <p {...pProps} />;
    },
    image: ({ src, alt }) => {
        // use alt for width and height
        // alt, width, height
        const [a, w, h] = alt.split(/\,\s?/);
        return (
            <div>
                <Image src={src} alt={a} width={w || 300} height={h || 300}/>
                <br/>
            </div>
        );
    },
    heading: ({ node, level }) => {
        const HLevel = "h" + level;
        const text = node.children[0].value;
        if(level <= 2) {
            return <HLevel className="border-bottom border-secondary mb-3 mt-2">{text}</HLevel>
        }
        return <HLevel>{text}</HLevel>
    }
};

export default MdRenderer;