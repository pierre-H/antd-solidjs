import { AliyunOutlined as BaseAliyunOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const AliyunOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseAliyunOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-aliyun-outlined text-xl"
            role="img"
            aria-label="aliyun-outlined"
            innerHTML={svgHTMLString}
        />
    );
};