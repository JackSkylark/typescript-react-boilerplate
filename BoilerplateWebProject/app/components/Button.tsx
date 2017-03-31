import * as React from "react";
import {style, types, classes} from "typestyle";

function Bordered(style: string):types.NestedCSSProperties  {
    return {
        borderStyle: style,
        borderWidth: "1px",
        borderColor: "#333"
    };
}

function RoundedBorder(radius: number): types.NestedCSSProperties {
    return {
        borderRadius: radius
    };
}

function combineCssProps(newProps: types.NestedCSSProperties, ...objects: types.NestedCSSProperties[]) {
    return Object.assign({}, ...objects, newProps) as types.NestedCSSProperties;
}

function ButtonStyles(): types.NestedCSSProperties {
    return combineCssProps({
        position: "relative",
        padding: "10px 20px",
        cursor: "pointer",
        fontSize: "12px",
        lineHeight: "14px",
        letterSpacing: "1px",
        fontWeight: 700,
        outline: "none",
        $nest: {
            "&:active": {
                top: "2px"
            }
        }
    }, 
    Bordered("solid"),
    RoundedBorder(5));
}

const errorButtonClass = style(
    ButtonStyles(),
    {
        color: "#FFFFFF",
        borderColor: "#d6251f",
        backgroundColor: "#D9534F",
        $nest: {
            "&:hover": {
                borderColor: "#d6251f",
                backgroundColor: "#e44944",
            },
            "&:active": {
                borderColor: "#bd3c38",
                backgroundColor: "#ce5d5a",
            }
        }
    }
)

const successButtonClass = style(
    ButtonStyles(),
    {
        color: "#FFFFFF",
        borderColor: "#45a163",
        backgroundColor: "#5FBA7D",
        $nest: {
            "&:hover": {
                borderColor: "#3aac60",
                backgroundColor: "#54c579",
            },
            "&:active": {
                borderColor: "#519567",
                backgroundColor: "#6aaf81",
            }
        }
    }
)

interface IProps {
    text: string;
}

export class ErrorButton extends React.Component<IProps, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <button className={errorButtonClass}>
                {this.props.text}
            </button>
        );
    }
}

export class SuccessButton extends React.Component<IProps, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        const hasError = true;

        return (
            <button className={classes(successButtonClass, hasError && "-error")}>
                {this.props.text}
            </button>
        );
    }
}
