export const queries ={
    getMenu: async (parent: any, args: any, context: any, info: any) => {
        try {
            const menu = await context.models.Menu.findOne({
                where: {
                    menuId: args.menuId
                }
            });
            if (!menu) {
                throw new Error('Menu not found');
            }
            return menu;
        } catch (error) {
            throw error;
        }
    }
    ,
    getMenus: async (parent: any, args: any, context: any, info: any) => {
        try {
            const menus = await context.models.Menu.findAll();
            return menus;
        } catch (error) {
            throw error;
        }
    }
}

export const resolvers = { queries };