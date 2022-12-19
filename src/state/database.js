import Mock from "./mock";

const database = {
  menu: [
    {
      name: "English",
      url: "/home",
    },
    {
      name: "Forum",
      url: "/forum",
    },
    {
      name: "Support",
      url: "/support",
    },
    {
      name: "Trips",
      url: "/trips",
    },
  ],
  
};


Mock.onGet("/api/data").reply((config) => {
  const response = database;
  return [200, response];
});
