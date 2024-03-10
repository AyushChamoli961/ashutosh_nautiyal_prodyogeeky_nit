import React from 'react';

const MessageParser = ({ children, actions }) => {
    // console.log(children.props.state)
    const { checker } = children.props.state;
    const parse = (message) => {
        const lowerCaseMessage = message.toLowerCase()
    
switch(true) {
    case lowerCaseMessage.includes("hello"):
    case lowerCaseMessage.includes("hi"):
        actions.greet(message);
        break;
    
    case lowerCaseMessage.includes("all clubs"):
        actions.listClubs(message);
        break;

    case lowerCaseMessage.includes("current events"):
        actions.currentEvents(message);
        break;

    case lowerCaseMessage.includes("number of clubs"):
        actions.totalClubs(message);
        break;

    case lowerCaseMessage.includes("ranking"):
        actions.ranking(message);
        break;

    case lowerCaseMessage.includes("contact"):
        actions.contact(message);
        break;

    case lowerCaseMessage.includes("phone"):
        actions.phone(message);
        break;

    case lowerCaseMessage.includes("alumni"):
        actions.alumni(message);
        break;

    default:
        actions.def(message);
}

        
        
    }
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions,
                });
            })}
        </div>
    );
};

export default MessageParser;

