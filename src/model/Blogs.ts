import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: Blog.BLOG_TABLE_NAME,
})
export class Blog extends Model {
  public static BLOG_TABLE_NAME = "note" as string;
  public static BLOG_ID = "id" as string;
  public static BLOG_TITLE = "title" as string;
  public static BLOG_CONTENT = "content" as string;
  public static BLOG_AUTHOR = "author" as string;
  public static BLOG_DATE= "date" as string;


  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    field: Blog.BLOG_ID
  })
  id!: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    field: Blog.BLOG_TITLE
  })
  title!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    field: Blog.BLOG_CONTENT
  })
  content!: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    field: Blog.BLOG_AUTHOR
  })
  author!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    field: Blog.BLOG_DATE
  })
  createdAt!: Date;
}

