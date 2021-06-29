/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
const categoryTypes = {
  results: [
    {
      id: 1,
      name: 'Lập trình Web',
      categories: [
        {
          id: 17,
          name: 'Angular',
          categoryTypeId: 1,
          courses: null,
          imageUrl: 'https://picsum.photos/200'
        },
        {
          id: 18,
          name: 'ReactJS',
          categoryTypeId: 1,
          courses: null,
          imageUrl: 'https://picsum.photos/200'
        },
        {
          id: 19,
          name: 'VueJS',
          categoryTypeId: 1,
          courses: null,
          imageUrl: 'https://picsum.photos/200'
        }
      ]
    },
    {
      id: 2,
      name: 'Lập trình thiết bị di động',
      categories: [
        {
          id: 20,
          name: 'React Native',
          categoryTypeId: 2,
          courses: null,
          imageUrl: 'https://picsum.photos/200'
        },
        {
          id: 21,
          name: 'Flutter',
          categoryTypeId: 2,
          courses: null,
          imageUrl: 'https://picsum.photos/200'
        }
      ]
    }
  ]
};

const categories = {
  results: [
    {
      id: 17,
      name: 'Angular',
      categoryTypeId: 1,
      categoryType: null,
      courses: null,
      imageUrl: 'https://picsum.photos/200'
    },
    {
      id: 18,
      name: 'ReactJS',
      categoryTypeId: 1,
      categoryType: null,
      courses: null,
      imageUrl: 'https://picsum.photos/200'
    },
    {
      id: 19,
      name: 'VueJS',
      categoryTypeId: 1,
      categoryType: null,
      courses: null,
      imageUrl: 'https://picsum.photos/200'
    },
    {
      id: 20,
      name: 'React Native',
      categoryTypeId: 2,
      categoryType: null,
      courses: null,
      imageUrl: 'https://picsum.photos/200'
    },
    {
      id: 21,
      name: 'Flutter',
      categoryTypeId: 2,
      categoryType: null,
      courses: null,
      imageUrl: 'https://picsum.photos/200'
    }
  ]
};

const courses = {
  results: [
    {
      id: 1,
      name: 'Khóa học Angular 2 căn bản',
      categoryTypeId: 1,
      categoryTypeName: 'Lập trình Web',
      categoryId: 17,
      categoryName: 'Angular',
      lectureId: 'ace4c3a5-3214-4cc9-a7c0-a7f80a61d5fa',
      lectureName: 'nguyenthanhtung990818',
      imageUrl: 'https://picsum.photos/200',
      price: 123.5,
      discount: 0.1,
      view: 10,
      shortDiscription:
        'Angular 2 là một framework hoàn chỉnh phát triển bởi Google, nó kế thừa các tính năng của AngularJS phiên bản 1 và phát triển đột phá với các tính năng và kiến trúc mới giúp cho việc xây dựng ứng dụng Web và Mobile dễ dàng hơn.',
      detailDiscription:
        'Khóa học Angular2 cơ bản có các nội dung tổng quát về các thành phần và kiến trúc của Angular2 thông qua các ví dụ sẽ giúp bạn dễ dàng tiếp cận hơn. Đồng thời mình sẽ cố gắng giúp các bạn hiểu được tác dụng của nó trong dự án thực tế.',
      lastUpdated: '2021-06-08T07:56:52.0613882',
      statusId: 2,
      statusName: 'Unfinished',
      registeredUserNumber: 0,
      feedbacks: []
    },
    {
      id: 2,
      name: 'Làm dự án thực tế với Angular 2+ Web API',
      categoryTypeId: 1,
      categoryTypeName: 'Lập trình Web',
      categoryId: 17,
      categoryName: 'Angular',
      lectureId: 'ace4c3a5-3214-4cc9-a7c0-a7f80a61d5fa',
      lectureName: 'nguyenthanhtung990818',
      imageUrl: 'https://picsum.photos/200',
      price: 234.5,
      discount: 0.2,
      view: 123,
      shortDiscription:
        'Khóa học này sẽ hướng dẫn cho các bạn cách làm dự án thực tế và tổ chức source code với Angular 2 CLI sau đó bài cuối sẽ nâng cấp lên Angular 6. Khóa học có sử dụng thư viện Angular CLI + Webpack làm công cụ chính phát triển trên nền Visual Studio Code của Microsoft. Phần WebAPI sẽ kế thừa lại từ khóa học làm dự án thực tế với AngularJS WebAPI và Entityt Framework Code First. ',
      detailDiscription:
        'Đối tượng khóa học: Là các bạn đã có nền tảng JavaScript, HTML và CSS. Các bạn đã học qua khóa TypeScript căn bản và khóa học Angular 2 căn bản của TEDU.',
      lastUpdated: '2021-06-08T08:03:00.7132256',
      statusId: 1,
      statusName: 'Finished',
      registeredUserNumber: 0,
      feedbacks: []
    },
    {
      id: 3,
      name: 'Lập trình React JS - ReactJS ES6',
      categoryTypeId: 1,
      categoryTypeName: 'Lập trình Web',
      categoryId: 18,
      categoryName: 'ReactJS',
      lectureId: 'ace4c3a5-3214-4cc9-a7c0-a7f80a61d5fa',
      lectureName: 'nguyenthanhtung990818',
      imageUrl: 'https://picsum.photos/200',
      price: 1005.5,
      discount: 0.5,
      view: 1254,
      shortDiscription: 'Khóa học rất hữu ích dành cho lập trình viên.',
      detailDiscription: 'Khóa học rất hữu ích dành cho lập trình viên.',
      lastUpdated: '2021-06-08T08:30:44.5035397',
      statusId: 2,
      statusName: 'Unfinished',
      registeredUserNumber: 0,
      feedbacks: []
    },
    {
      id: 4,
      name: 'Lập trình React.js cho người mới bắt đầu',
      categoryTypeId: 1,
      categoryTypeName: 'Lập trình Web',
      categoryId: 18,
      categoryName: 'ReactJS',
      lectureId: 'ace4c3a5-3214-4cc9-a7c0-a7f80a61d5fa',
      lectureName: 'nguyenthanhtung990818',
      imageUrl: 'https://picsum.photos/200',
      price: 1505.5,
      discount: 0.1,
      view: 3425,
      shortDiscription: 'Khóa học rất hữu ích dành cho lập trình viên.',
      detailDiscription: 'Khóa học rất hữu ích dành cho lập trình viên.',
      lastUpdated: '2021-06-08T08:34:06.5613237',
      statusId: 1,
      statusName: 'Finished',
      registeredUserNumber: 0,
      feedbacks: []
    },
    {
      id: 5,
      name: 'React Native căn bản',
      categoryTypeId: 2,
      categoryTypeName: 'Lập trình thiết bị di động',
      categoryId: 20,
      categoryName: 'React Native',
      lectureId: 'ace4c3a5-3214-4cc9-a7c0-a7f80a61d5fa',
      lectureName: 'nguyenthanhtung990818',
      imageUrl: 'https://picsum.photos/200',
      price: 546.5,
      discount: 0.1,
      view: 567,
      shortDiscription:
        'Khóa học này trang bị cho các bạn kiến thức cơ bản về React Native giúp bạn có được những gì cần thiết để bước vào phát triển mobile cross platform với React Native.',
      detailDiscription:
        'Khóa học này trang bị cho các bạn kiến thức cơ bản về React Native giúp bạn có được những gì cần thiết để bước vào phát triển mobile cross platform với React Native.',
      lastUpdated: '2021-06-09T08:54:23.363592',
      statusId: 1,
      statusName: 'Finished',
      registeredUserNumber: 0,
      feedbacks: []
    },
    {
      id: 6,
      name: 'Xây dựng ứng dụng React Native với Firebase A - Z',
      categoryTypeId: 2,
      categoryTypeName: 'Lập trình thiết bị di động',
      categoryId: 20,
      categoryName: 'React Native',
      lectureId: 'ace4c3a5-3214-4cc9-a7c0-a7f80a61d5fa',
      lectureName: 'nguyenthanhtung990818',
      imageUrl: 'https://picsum.photos/200',
      price: 1046.5,
      discount: 0.15,
      view: 1567,
      shortDiscription:
        'Hướng dẫn cài đặt, kết nối và xây dựng ứng dụng React-Native với Firebase theo cách mới nhất.',
      detailDiscription:
        'Hướng dẫn cài đặt, kết nối và xây dựng ứng dụng React-Native với Firebase theo cách mới nhất.',
      lastUpdated: '2021-06-09T09:00:46.1418369',
      statusId: 2,
      statusName: 'Unfinished',
      registeredUserNumber: 0,
      feedbacks: []
    },
    {
      id: 7,
      name: 'Vue.JS 3 Tutorial for Beginners',
      categoryTypeId: 1,
      categoryTypeName: 'Lập trình Web',
      categoryId: 19,
      categoryName: 'VueJS',
      lectureId: 'ace4c3a5-3214-4cc9-a7c0-a7f80a61d5fa',
      lectureName: 'nguyenthanhtung990818',
      imageUrl: 'https://picsum.photos/200',
      price: 146.5,
      discount: 0.15,
      view: 167,
      shortDiscription: 'Vue JS 3 Tutorial for Beginners.',
      detailDiscription: 'Vue JS 3 Tutorial for Beginners.',
      lastUpdated: '2021-06-09T09:09:26.2491867',
      statusId: 2,
      statusName: 'Unfinished',
      registeredUserNumber: 0,
      feedbacks: []
    },
    {
      id: 8,
      name: 'Advanced VueJs Form Component',
      categoryTypeId: 1,
      categoryTypeName: 'Lập trình Web',
      categoryId: 19,
      categoryName: 'VueJS',
      lectureId: 'ace4c3a5-3214-4cc9-a7c0-a7f80a61d5fa',
      lectureName: 'nguyenthanhtung990818',
      imageUrl: 'https://picsum.photos/200',
      price: 46.5,
      discount: 0.15,
      view: 1671,
      shortDiscription:
        'Learn how to build an advanced form component with VueJs.',
      detailDiscription:
        'Learn how to build an advanced form component with VueJs.',
      lastUpdated: '2021-06-09T09:14:17.6813951',
      statusId: 1,
      statusName: 'Finished',
      registeredUserNumber: 0,
      feedbacks: []
    },
    {
      id: 9,
      name: 'Xây dựng ứng dụng Mobile với Flutter căn bản',
      categoryTypeId: 2,
      categoryTypeName: 'Lập trình thiết bị di động',
      categoryId: 21,
      categoryName: 'Flutter',
      lectureId: 'ace4c3a5-3214-4cc9-a7c0-a7f80a61d5fa',
      lectureName: 'nguyenthanhtung990818',
      imageUrl: 'https://picsum.photos/200',
      price: 56.5,
      discount: 0.2,
      view: 2671,
      shortDiscription:
        'Nhu cầu phát triển ứng dụng trên nền tảng Mobile đang phát triển rất nhanh và yêu cầu của khách hàng và bất cứ sản phẩm nào cũng cần ứng dụng trên Mobile. Nắm bắt được xu hướng đó, TEDU đã nghiên cứu và ra mắt cho các bạn mới bắt đầu học lập trình Mobile một khóa học că bản sử dụng Flutter. Đây là framework xây dựng ứng dụng mobile đa nền tảng từ Google, nó có thể sử dụng để xây dựng ứng dụng chạy trên các hệ điều hành Mobile phổ biến hiện này là Android và iOS với chỉ một source code. Về tốc độ của Flutter được đánh giá là tiệm cận Native nhất làm tăng trải nghiệm người dùng nhờ cơ chế Flutter SDK trên cả 2 nền tảng.',
      detailDiscription:
        'Sau khi tìm hiểu cả 3 framework là Xamarin, React Native và Flutter thì TEDU quyết định làm khóa học và các ứng dụng của TEDU sau này bằng Flutter.',
      lastUpdated: '2021-06-09T09:21:08.357852',
      statusId: 2,
      statusName: 'Unfinished',
      registeredUserNumber: 0,
      feedbacks: []
    },
    {
      id: 10,
      name: 'Decoding Flutter',
      categoryTypeId: 2,
      categoryTypeName: 'Lập trình thiết bị di động',
      categoryId: 21,
      categoryName: 'Flutter',
      lectureId: 'ace4c3a5-3214-4cc9-a7c0-a7f80a61d5fa',
      lectureName: 'nguyenthanhtung990818',
      imageUrl: 'https://picsum.photos/200',
      price: 356.5,
      discount: 0.1,
      view: 217,
      shortDiscription:
        "Welcome to Decoding Flutter, where we’ll answer your tough questions like: Why doesn't hot reload work? Or what's going on with this State thing anyways? We'll take your questions and investigate the behind-the-scenes answers and unravel the code that powers Flutter.",
      detailDiscription:
        "Welcome to Decoding Flutter, where we’ll answer your tough questions like: Why doesn't hot reload work? Or what's going on with this State thing anyways? We'll take your questions and investigate the behind-the-scenes answers and unravel the code that powers Flutter.",
      lastUpdated: '2021-06-09T09:32:45.6508491',
      statusId: 1,
      statusName: 'Finished',
      registeredUserNumber: 0,
      feedbacks: []
    },
    {
      id: 11,
      name: 'AngularJS căn bản',
      categoryTypeId: 1,
      categoryTypeName: 'Lập trình Web',
      categoryId: 17,
      categoryName: 'Angular',
      lectureId: 'ace4c3a5-3214-4cc9-a7c0-a7f80a61d5fa',
      lectureName: 'nguyenthanhtung990818',
      imageUrl: 'https://picsum.photos/200',
      price: 316.5,
      discount: 0.2,
      view: 2171,
      shortDiscription:
        'Khóa học này mình sẽ mang đến cho các bạn các kiến thức cơ bản về làm việc với AngularJS, một framework xây dựng Single Page Application phổ biến nhất hiện nay.',
      detailDiscription:
        'Khóa học này mình sẽ mang đến cho các bạn các kiến thức cơ bản về làm việc với AngularJS, một framework xây dựng Single Page Application phổ biến nhất hiện nay.',
      lastUpdated: '2021-06-09T09:44:12.6948422',
      statusId: 1,
      statusName: 'Finished',
      registeredUserNumber: 0,
      feedbacks: []
    },
    {
      id: 12,
      name: 'Lập trình Angular từ A-Z',
      categoryTypeId: 1,
      categoryTypeName: 'Lập trình Web',
      categoryId: 17,
      categoryName: 'Angular',
      lectureId: 'ace4c3a5-3214-4cc9-a7c0-a7f80a61d5fa',
      lectureName: 'nguyenthanhtung990818',
      imageUrl: 'https://picsum.photos/200',
      price: 3161.5,
      discount: 0.25,
      view: 211,
      shortDiscription:
        'Angular là một javascript platform, giúp các bạn xây dựng các ứng dụng web nhanh chóng và dễ dàng. Angular đã trang bị sẵn rất nhiều công cụ để làm quá trình xây dựng ứng dụng web của các bạn dễ dàng hơn, vd như: tự động reload khi code thay đổi, minify code bằng lệnh, sử dụng typescript, sass, less thay thế cho javascript và css đơn thuần. Tính năng vô cùng quan trọng nữa làm cho Angular khác biệt so với Jquery là, angular quản lý view theo state, tức là thay đổi giao diện theo trạng thái, giúp chúng ta tránh được rất nhiều lỗi logic trong quá trình viết code, đặc biệt trong các project lớn và phức tạp.',
      detailDiscription:
        'Angular là một javascript platform, giúp các bạn xây dựng các ứng dụng web nhanh chóng và dễ dàng. Angular đã trang bị sẵn rất nhiều công cụ để làm quá trình xây dựng ứng dụng web của các bạn dễ dàng hơn, vd như: tự động reload khi code thay đổi, minify code bằng lệnh, sử dụng typescript, sass, less thay thế cho javascript và css đơn thuần. Tính năng vô cùng quan trọng nữa làm cho Angular khác biệt so với Jquery là, angular quản lý view theo state, tức là thay đổi giao diện theo trạng thái, giúp chúng ta tránh được rất nhiều lỗi logic trong quá trình viết code, đặc biệt trong các project lớn và phức tạp.',
      lastUpdated: '2021-06-09T09:45:25.573032',
      statusId: 2,
      statusName: 'Unfinished',
      registeredUserNumber: 0,
      feedbacks: []
    },
    {
      id: 13,
      name: 'Sử dụng Redux trong ReactJS',
      categoryTypeId: 1,
      categoryTypeName: 'Lập trình Web',
      categoryId: 18,
      categoryName: 'ReactJS',
      lectureId: 'ace4c3a5-3214-4cc9-a7c0-a7f80a61d5fa',
      lectureName: 'nguyenthanhtung990818',
      imageUrl: 'https://picsum.photos/200',
      price: 61.5,
      discount: 0.25,
      view: 2112,
      shortDiscription:
        'Với các dự án lớn số lượng Component lớn, thì số lượng Props & State sẽ rất nhiều. Nếu quản lí không khéo sẽ dẫn đến rối & rất khó bảo trì và nâng cấp dự án. Redux sinh ra để giải quyết việc này. Cùng nhau tìm hiểu Redux trong Reactjs các bạn nhé.',
      detailDiscription:
        'Với các dự án lớn số lượng Component lớn, thì số lượng Props & State sẽ rất nhiều. Nếu quản lí không khéo sẽ dẫn đến rối & rất khó bảo trì và nâng cấp dự án. Redux sinh ra để giải quyết việc này. Cùng nhau tìm hiểu Redux trong Reactjs các bạn nhé.',
      lastUpdated: '2021-06-09T09:55:57.6649203',
      statusId: 1,
      statusName: 'Finished',
      registeredUserNumber: 0,
      feedbacks: []
    },
    {
      id: 14,
      name: 'ReactJS React Router & Foundation',
      categoryTypeId: 1,
      categoryTypeName: 'Lập trình Web',
      categoryId: 18,
      categoryName: 'ReactJS',
      lectureId: 'ace4c3a5-3214-4cc9-a7c0-a7f80a61d5fa',
      lectureName: 'nguyenthanhtung990818',
      imageUrl: 'https://picsum.photos/200',
      price: 61.55,
      discount: 0.25,
      view: 21,
      shortDiscription:
        'React Router là một thư viện được dùng để tạo ra các route, giúp cho người dùng chuyển hướng website sang các page khác nhau mà không cần phải reload lại toàn bộ trang web, điều này giúp cho trải nghiệm người dùng tốt hơn khi giảm bớt được thời gian tải website.',
      detailDiscription:
        'React Router là một thư viện được dùng để tạo ra các route, giúp cho người dùng chuyển hướng website sang các page khác nhau mà không cần phải reload lại toàn bộ trang web, điều này giúp cho trải nghiệm người dùng tốt hơn khi giảm bớt được thời gian tải website.',
      lastUpdated: '2021-06-09T10:00:29.9314047',
      statusId: 2,
      statusName: 'Unfinished',
      registeredUserNumber: 0,
      feedbacks: []
    },
    {
      id: 15,
      name: 'ReactJS Server-side Rendering',
      categoryTypeId: 1,
      categoryTypeName: 'Lập trình Web',
      categoryId: 18,
      categoryName: 'ReactJS',
      lectureId: 'ace4c3a5-3214-4cc9-a7c0-a7f80a61d5fa',
      lectureName: 'nguyenthanhtung990818',
      imageUrl: 'https://picsum.photos/200',
      price: 65.55,
      discount: 0.25,
      view: 21,
      shortDiscription: 'ReactJS Server-side Rendering',
      detailDiscription: 'ReactJS Server-side Rendering',
      lastUpdated: '2021-06-09T10:04:33.5698785',
      statusId: 1,
      statusName: 'Finished',
      registeredUserNumber: 0,
      feedbacks: []
    },
    {
      id: 16,
      name: 'React Native - App Cancer',
      categoryTypeId: 2,
      categoryTypeName: 'Lập trình thiết bị di động',
      categoryId: 20,
      categoryName: 'React Native',
      lectureId: 'ace4c3a5-3214-4cc9-a7c0-a7f80a61d5fa',
      lectureName: 'nguyenthanhtung990818',
      imageUrl: 'https://picsum.photos/200',
      price: 165.55,
      discount: 0.25,
      view: 215,
      shortDiscription: 'React Native - App Cancer',
      detailDiscription: 'React Native - App Cancer',
      lastUpdated: '2021-06-09T10:07:48.1482804',
      statusId: 1,
      statusName: 'Finished',
      registeredUserNumber: 0,
      feedbacks: []
    },
    {
      id: 17,
      name: 'React Native Animation',
      categoryTypeId: 2,
      categoryTypeName: 'Lập trình thiết bị di động',
      categoryId: 20,
      categoryName: 'React Native',
      lectureId: 'ace4c3a5-3214-4cc9-a7c0-a7f80a61d5fa',
      lectureName: 'nguyenthanhtung990818',
      imageUrl: 'https://picsum.photos/200',
      price: 2165.55,
      discount: 0.5,
      view: 215,
      shortDiscription:
        'Các hiệu ứng animation (chuyển hoạt) đang rất phổ biến và là một phần không thể thiếu trong các ứng dụng hiện nay. Animation làm cho ứng dụng của chúng ta sống động và tương tác với người dùng tốt hơn. Trong loạt bài này, chúng ta cùng tìm hiểu cách làm animation với React Native.',
      detailDiscription:
        'Các hiệu ứng animation (chuyển hoạt) đang rất phổ biến và là một phần không thể thiếu trong các ứng dụng hiện nay. Animation làm cho ứng dụng của chúng ta sống động và tương tác với người dùng tốt hơn. Trong loạt bài này, chúng ta cùng tìm hiểu cách làm animation với React Native.',
      lastUpdated: '2021-06-09T10:10:46.3795101',
      statusId: 1,
      statusName: 'Finished',
      registeredUserNumber: 0,
      feedbacks: []
    },
    {
      id: 18,
      name: 'React Native - Nhúng quảng cáo Admob',
      categoryTypeId: 2,
      categoryTypeName: 'Lập trình thiết bị di động',
      categoryId: 20,
      categoryName: 'React Native',
      lectureId: 'ace4c3a5-3214-4cc9-a7c0-a7f80a61d5fa',
      lectureName: 'nguyenthanhtung990818',
      imageUrl: 'https://picsum.photos/200',
      price: 215.55,
      discount: 0.3,
      view: 2151,
      shortDiscription: 'React Native - Nhúng quảng cáo Admob',
      detailDiscription: 'React Native - Nhúng quảng cáo Admob',
      lastUpdated: '2021-06-09T10:19:27.475374',
      statusId: 2,
      statusName: 'Unfinished',
      registeredUserNumber: 0,
      feedbacks: []
    },
    {
      id: 19,
      name: 'Làm dự án với ReactJS + Redux và TypeScript',
      categoryTypeId: 1,
      categoryTypeName: 'Lập trình Web',
      categoryId: 18,
      categoryName: 'ReactJS',
      lectureId: 'ace4c3a5-3214-4cc9-a7c0-a7f80a61d5fa',
      lectureName: 'nguyenthanhtung990818',
      imageUrl: 'https://picsum.photos/200',
      price: 2115.55,
      discount: 0.25,
      view: 216,
      shortDiscription: 'Làm dự án với ReactJS + Redux và TypeScript',
      detailDiscription:
        'Khóa học này sẽ thay đổi hoàn toàn mới sử dụng ReactJS, TypeScript và Redux. Với React chúng ta sẽ sử dụng Functional Component và React Hooks. Phần backend API của khoá học này sẽ sử dụng REST API của khoá học TEDU-41 là Xây dựng REST API với NodeJS MongoDB và Express. .Đây sẽ là món quà hoàn toàn mới để các bạn hướng đến full stack Javascript. Với bộ công nghệ này và sau này sẽ là React Native bạn sẽ có thể làm dự án cho cả 3 nền tảng Web, Android và IOS với chỉ một ngôn ngữ lập trình duy nhất là JavaScript. Với một cải tiến nữa là chúng ta dùng Javascript nhưng viết dạng TypeScript sẽ giúp việc hạn chế các điểm yếu của JavaScript thuần như kiểu lỏng kẻo, giúp check lỗi lúc biên dịch tốt hơn nhờ Strong Type. Code cũng sẽ dễ maintenance sau này hơn. TypeScript được sử dụng xuyên suốt từ Backend đến Frontend. Đây cũng là stack công nghệ đang hot hiện nay thể hiện sự linh hoạt, tốc độ và độ mở rộng tốt. Chỉ cần các bạn thành thạo JavaScript căn bản là có thể học được nên có thể đáp ứng được rộng rãi nhu cầu của các bạn. TEDU đã đang và sẽ luôn nghiên cứu phát triển các khóa học mới và chất lượng với giá cả luôn thấp hơn giá trị của khóa học.',
      lastUpdated: '2021-06-09T10:24:10.7892899',
      statusId: 1,
      statusName: 'Finished',
      registeredUserNumber: 0,
      feedbacks: []
    },
    {
      id: 20,
      name: 'Flutter at Google I/O 2019',
      categoryTypeId: 2,
      categoryTypeName: 'Lập trình thiết bị di động',
      categoryId: 21,
      categoryName: 'Flutter',
      lectureId: 'ace4c3a5-3214-4cc9-a7c0-a7f80a61d5fa',
      lectureName: 'nguyenthanhtung990818',
      imageUrl: 'https://picsum.photos/200',
      price: 5115.55,
      discount: 0.5,
      view: 1216,
      shortDiscription:
        "The Material Components library has grown since Flutter's launch. Learn what's new, how to use it with our iOS Design Language library Cupertino, and how to apply it across varying screen sizes, interaction models, and viewing distances.",
      detailDiscription:
        "The Material Components library has grown since Flutter's launch. Learn what's new, how to use it with our iOS Design Language library Cupertino, and how to apply it across varying screen sizes, interaction models, and viewing distances.",
      lastUpdated: '2021-06-09T10:30:53.4301528',
      statusId: 1,
      statusName: 'Finished',
      registeredUserNumber: 0,
      feedbacks: []
    }
  ]
};
