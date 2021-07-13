import { CommentOutlined as BaseCommentOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CommentOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCommentOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-comment-outlined text-xl"
            role="img"
            aria-label="comment-outlined"
            innerHTML={svgHTMLString}
        />
    );
};