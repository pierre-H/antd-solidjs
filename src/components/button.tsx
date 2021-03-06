import {
    splitProps,
    Component,
    JSXElement,
    ComponentProps,
    mergeProps,
    Show,
} from "solid-js";

export type ButtonTypes = "primary" | "dashed" | "link" | "text";

export type ButtonProps = {
    type?: ButtonTypes;
    ghost?: boolean;
    children?: JSXElement;
    htmlType?: ComponentProps<"button">["type"];
    size?: "large" | "small";
    loading?: boolean;
    block?: boolean;
} & Omit<ComponentProps<"button">, "type">;

const LoadingIcon = () => (
    <span class="ant-btn-loading-icon">
        <span
            role="img"
            aria-label="loading"
            class="anticon anticon-loading anticon-spin"
        >
            <svg
                viewBox="0 0 1024 1024"
                data-icon="loading"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
            >
                <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
            </svg>
        </span>
    </span>
);

export const Button: Component<ButtonProps> = (props) => {
    const merged = mergeProps({ htmlType: "button" }, props);
    const [local, others] = splitProps(merged, [
        "type",
        "ghost",
        "htmlType",
        "size",
        "loading",
        "block",
    ]);

    return (
        <button
            class="ant-btn"
            classList={{
                "ant-btn-primary": local.type === "primary",
                "ant-btn-dashed": local.type === "dashed",
                "ant-btn-text": local.type === "text",
                "ant-btn-link": local.type === "link",
                "ant-btn-background-ghost": local.ghost,
                "ant-btn-sm": local.size === "small",
                "ant-btn-lg": local.size === "large",
                "ant-btn-loading": local.loading,
                "ant-btn-block": local.block,
            }}
            type={local.htmlType}
            ant-click-animating-without-extra-node={
                local.loading ? true : false
            }
            {...others}
        >
            <Show when={local.loading}>
                <LoadingIcon />
            </Show>
            <span>{props.children}</span>
        </button>
    );
};
