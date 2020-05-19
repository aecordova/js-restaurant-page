import logo from '../img/logo.png';

const PageContent = {
  header: {
    brandLogo: logo,
    brandName: 'Delicious',
    menuOptions: {
      About: '#',
      Menu: '#',
      Contact: '#',
    },
  },
  sections: {
    about: {
      title: 'About Us',
      body: 'Accusantium corporis aperiam architecto inventore. Repudiandae error et quis dolorem debitis repellendus fugit aspernatur. Blanditiis sunt et et eum provident voluptatem odio eos. Voluptatem doloribus rerum nostrum sequi qui at illum. Dolorem dolor vitae in fugit sequi possimus.Iusto assumenda cum dignissimos perferendis corporis velit sit fugit. Temporibus assumenda ab ut rerum possimus voluptates est. Ut et eligendi labore magnam culpa expedita odit hic. Labore aut ipsum ex ut voluptas et. Officiis nesciunt eligendi quo odit voluptatum animi corporis aut.Et in aut ipsum dicta officia harum. Sit et sed nesciunt magni. Distinctio laborum voluptates eius accusantium. Nulla qui ab magni. Voluptas qui sit doloremque voluptas repellendus labore voluptates.',
    },
    menu: {
      title: 'Our Menu',
      menuItems: {
        Salads: [
          {
            name: 'Siam',
            price: 8.95,
            desc:
              'vegan. mixt greens, green papaya, jicama, mango, cucumber, red pepper, fresh herbs, spicy peanuts, thai lemongrass vinaigrette.',
          },
          {
            name: 'Hatch',
            price: 11.95,
            desc:
              'romaine hearts, grilled chicken, roasted red peppers, black beans, sharp cheddar, red onion, point reyes blue cheese dressing with a chipotle honey drizzle',
          },
          {
            name: 'Maui',
            price: 5.95,
            desc:
              'mixt arugula, grilled flat iron steak, blue cheese, herb roasted potatoes, cherry tomatoes, balsamic vinaigrette, topped with caramelized onions.',
          },
          {
            name: 'Bachelor',
            price: 7.95,
            desc:
              'romaine hearts, white anchovies, shaved parmesan, garlic croutons, caesar dressing.',
          },
        ],
      },
    },
    contact: {
      title: 'Contact Us!',
    },
  },
};

export default PageContent;
