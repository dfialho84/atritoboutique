CREATE TABLE "product_photo" (
	"order" integer NOT NULL,
	"product_id" uuid NOT NULL,
	"url" varchar(255) NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "product_photo_order_product_id_pk" PRIMARY KEY("order","product_id")
);
--> statement-breakpoint
ALTER TABLE "product" ADD COLUMN "is_active" boolean DEFAULT true NOT NULL;--> statement-breakpoint
ALTER TABLE "product" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "product" ADD COLUMN "updated_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "product_photo" ADD CONSTRAINT "product_photo_product_id_product_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."product"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "product_name_index" ON "product" USING btree ("name");