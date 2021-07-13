import { TeamOutlined as BaseTeamOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const TeamOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseTeamOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-team-outlined text-xl"
            role="img"
            aria-label="team-outlined"
            innerHTML={svgHTMLString}
        />
    );
};