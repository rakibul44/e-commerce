import apiService from "../api-service/api-service";

export const categoryApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
        // create a new category
        createCategory: builder.mutation({
            query: (category) => ({
                url: "category/create-category",
                method: "POST",
                body: category
            }),
        }),

        // create a new category with image
        createCategoryWithImage: builder.mutation({
            query: (formData) => ({
                url: "category/create-category-with-image?locationFolder=category-images",
                method: "POST",
                body: formData
            }),
        }),

        // get all category
        getAllCategory: builder.query({
            query: () => ({
                url: "category/all-category"
            })
        }),
        
        // get all category
        getCategoriesByType: builder.query({
            query: (type) => ({
                url: `category/category-type/${type}`
            })
        }),

        // get a spacific single category
        getCategoryById: builder.query({
            query: (id) => ({
                url: `category/${id}`
            })
        }),

   
        // update a category
        updateCategory: builder.mutation({
            query: ({ id, data}) => ({
                url: `category/update/${id}`,
                method: "PATCH",
                body: data
            })
        }),
        
        // update a category
        updateCategoryWithImage: builder.mutation({
            query: ({ id, data}) => ({
                url: `category/${id}/update-with-image?locationFolder=category-images`,
                method: "PATCH",
                body: data
            })
        }),

        // delete a category
        deleteCategory: builder.mutation({
            query: (id) => ({

                url: `category/delete/${id}`,
                method: "DELETE"
            })
        })
    }),
})