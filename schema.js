const storySchema = {
    id: "",
    slug: "",
    title: "",
    headline: "",
    category: "",
    sub_headline: "",
    desc_list: [
        {
            title: '',
            desc: ''
        }
    ],
    is_public: true,
    is_active: true,
    is_archive: false,
    thumbnails: {
        pc: "",
        tab: "",
        mobile: "",
    },
    img_desc: "",
    reported_by: "",
    address: {
        city: "",
        district: "",
        state: "",
        country: ""
    },
    updated_at: "",
    created_at: ""
};


const bannerSchema = {
    id: '',
    category: '',
    story_id: '',
    lexorank: 1
}

const highlites = {
  id: "",
  category: "",
  story_id: "",
  lexorank: 1,
};

const secondryBanner = {
  id: "",
  category: "",
  story_id: "",
  lexorank: 1,
};

const relatedStories = {
  id: "",
  category: "",
  story_id: "",
  lexorank: 1,
};


const category = {
    id: '',
    label: '',
    name: '',
    color: ''
}



//https://www.npmjs.com/package/react-sortable-hoc  sorting 

