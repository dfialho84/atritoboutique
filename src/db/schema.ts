import {
    uuid,
    pgTable,
    integer,
    varchar,
    text,
    boolean,
    timestamp,
    index,
    primaryKey,
} from "drizzle-orm/pg-core";

const createdAt = (columnName: string = "created_at") => {
    return timestamp(columnName).notNull().defaultNow();
};

const updatedAt = (columnName: string = "updated_at") => {
    return timestamp(columnName)
        .notNull()
        .defaultNow()
        .$onUpdate(() => new Date());
};

export const ProductTable = pgTable(
    "product",
    {
        id: uuid("id").primaryKey().defaultRandom(),
        name: varchar("name", { length: 255 }).notNull(),
        description: text("description").notNull(),
        priceInCents: integer("price_in_cents").notNull().default(0),
        isActive: boolean("is_active").notNull().default(true),
        createdAt: createdAt(),
        updatedAt: updatedAt(),
    },
    (table) => [index("product_name_index").on(table.name)]
);

export const ProductPhotoTable = pgTable(
    "product_photo",
    {
        order: integer("order").notNull(),
        productId: uuid("product_id")
            .notNull()
            .references(() => ProductTable.id, { onDelete: "cascade" }),
        url: varchar("url", { length: 255 }).notNull(),
        isActive: boolean("is_active").notNull().default(true),
        createdAt: createdAt(),
        updatedAt: updatedAt(),
    },
    (table) => [primaryKey({ columns: [table.order, table.productId] })]
);
