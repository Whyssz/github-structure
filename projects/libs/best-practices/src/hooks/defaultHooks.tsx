import { FC, useCallback, useMemo, useState } from "react";

export const UseMemo: FC = () => {
  const [user, setUser] = useState({ name: "Name" });
  // caches the value until the trigger changes
  const getUser = useMemo(() => {
    return user.name;
  }, [user.name]);

  return null;
};

// usually will use with memo
export const UseCallback = () => {
  const [data, setData] = useState<string>("log");
  // caches the function (reference to it when passing props), prevents unnecessary renders
  const getFunc = useCallback(() => {
    console.log(data);
  }, [data]);

  return null;
};

// memo re-render with props
export const Categories: React.FC<CatergoriesId> = memo(({ categoryId }) => {
  const dispatch = useDispatch();

  const sortList = (list: CategoriesType[]) => {
    const generate = list.map(({ id, name }) => {
      const classes = classNames({
        active: id === categoryId,
      });
      return (
        <li
          onClick={() => dispatch(setCategoryId(id))}
          key={id}
          className={classes}
        >
          {name}
        </li>
      );
    });
    return <ul>{generate}</ul>;
  };

  const list = sortList(categories);

  return <div className="categories">{list}</div>;
}); // Shallow Equal
/* deep check ex: {obj.value}
}, {
 (prevProps, nextProps) => {
  ...
 } 
})
*/
