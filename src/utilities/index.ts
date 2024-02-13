export const isValidHexColor = (color: string) => {
    const hexColorRegex = /^#[0-9A-Fa-f]{6}$/;

    return hexColorRegex.test(color);
};
