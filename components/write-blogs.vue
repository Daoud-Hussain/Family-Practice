<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <header class="flex items-center justify-between p-6 bg-secondary">
        <h1 class="text-2xl font-bold text-gray-800">Blogs Dashboard</h1>
        <div class="flex items-center space-x-4">
          <div class="text-sm">
            <p class="font-semibold">Welcome, Admin</p>
            <a href="#" class="text-green-500 hover:underline">Edit Profile</a>
          </div>
          
        </div>
      </header>

      <!-- Main Content -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="lg:col-end-1	 bg-white p-6 shadow-lg rounded-lg">
          <h2 class="text-xl font-semibold mb-4 text-gray-800">Write New Blog</h2>
          <form @submit.prevent="submitNewBlog">
            <div class="mb-4">
              <label class="block text-gray-700 font-semibold mb-2" for="title">Title</label>
              <input
                v-model="title"
                type="text"
                id="title"
                class="w-full bg-white px-2 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter blog title"
                required
              />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-semibold mb-2" for="content">Content</label>
              <textarea
                v-model="content"
                id="content"
                class="w-full bg-white px-2 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Write your blog content here..."
                rows="6"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Post Blog
            </button>
          </form>
        </div>

        <!-- Blog List Section -->
        <div class="bg-white p-6 shadow-lg rounded-lg">
          <h2 class="text-xl font-semibold mb-4 text-gray-800">Your Blogs</h2>
          <!--
          <ul>
            <li
              v-for="blog in blogs"
              :key="id"
              class="flex items-center justify-between py-4 border-b last:border-none"
            >
              <div>
                <h3 class="font-bold text-lg text-gray-800">{{ blog.title }}</h3>
                <p class="text-sm text-gray-600">{{ blog.createdAt }}</p>
              </div>
              <div class="flex space-x-4">
                <button
                  class="text-green-500 hover:underline"
                  @click="editBlog(blog.id)"
                >
                  Edit
                </button>
                <button
                  class="text-red-500 hover:underline"
                  @click="deleteBlog(blog.id)"
                >
                  Delete
                </button>
              </div>
            </li>
          </ul>
          -->
        </div>
      </div>
    </div>

    <!-- Profile Modal -->
    <!--
    <div v-if="showProfileModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 class="text-xl font-semibold mb-4">Edit Profile</h2>
        <form @submit.prevent="updateProfile">
          <div class="mb-4">
            <label class="block text-gray-700 font-semibold mb-2" for="name">Name</label>
            <input
              v-model="admin.name"
              type="text"
              id="name"
              class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-semibold mb-2" for="email">Email</label>
            <input
              v-model="email"
              type="email"
              id="email"
              class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-semibold mb-2">Profile Picture</label>
            <input type="file" @change="updateProfilePicture" />
          </div>
          <button
            type="submit"
            class="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Update Profile
          </button>
        </form>
        <button
          @click="closeProfileModal"
          class="mt-4 w-full text-center text-gray-500 hover:underline"
        >
          Cancel
        </button>
      </div>
    </div>
    -->
  </div>
</template>
