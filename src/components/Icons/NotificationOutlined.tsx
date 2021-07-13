import { NotificationOutlined as BaseNotificationOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const NotificationOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseNotificationOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-notification-outlined text-xl"
            role="img"
            aria-label="notification-outlined"
            innerHTML={svgHTMLString}
        />
    );
};