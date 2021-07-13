import { NotificationFilled as BaseNotificationFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const NotificationFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseNotificationFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-notification-filled text-xl"
            role="img"
            aria-label="notification-filled"
            innerHTML={svgHTMLString}
        />
    );
};