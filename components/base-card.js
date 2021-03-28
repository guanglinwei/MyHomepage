import * as React from "react";
import Card from "react-bootstrap/Card";
import Link from 'next/link';

const defaultCardStyle = {
    bg: "light",
    text:"dark",
    className: "h-100"
}

const BaseCard = ({ body, header, footer, target, cardCustomStyle }) => {
    const cardStyle = cardCustomStyle || defaultCardStyle;

    const isRelativeLink = target && target.charAt(0) === '/';

    const innerCard =
        <Card {...cardStyle}>
            {header}
            {body}
            {footer}
            {!isRelativeLink && <a href={target} target="_blank" rel="noreferrer" className="stretched-link"></a>}  
        </Card>

    return (
        <span>
            {isRelativeLink ?
                <Link
                    href={target || "/"}
                    style={{ textDecoration: 'none' }}>
                    {innerCard}
                </Link>
                :
                <div className="h-100">{innerCard}</div>
            } 
        </span>
    );
}

export default BaseCard;