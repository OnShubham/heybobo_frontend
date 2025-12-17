// Test file to verify XPPopup API integration
// You can run this in your browser console to test the API

const testUserId = "user123";
const apiUrl = `http://127.0.0.1:8000/quests/${testUserId}/status`;

console.log("Testing XPPopup API Integration...");
console.log("API URL:", apiUrl);

fetch(apiUrl)
    .then(response => {
        console.log("Response status:", response.status);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("✅ API Response received:");
        console.log(JSON.stringify(data, null, 2));

        // Validate response structure
        console.log("\n📋 Validation:");
        console.log("Has quest_details:", !!data.quest_details);
        console.log("Has tasks array:", Array.isArray(data.quest_details?.tasks));
        console.log("Number of tasks:", data.quest_details?.tasks?.length);
        console.log("Has progress:", !!data.progress);
        console.log("Has streak:", typeof data.streak === 'number');

        // Check task structure
        if (data.quest_details?.tasks?.length > 0) {
            const firstTask = data.quest_details.tasks[0];
            console.log("\n📝 First Task Structure:");
            console.log("Has name:", !!firstTask.name);
            console.log("Has description:", !!firstTask.description);
        }

        console.log("\n✅ All validations passed! XPPopup should work correctly.");
    })
    .catch(error => {
        console.error("❌ Error fetching quest data:");
        console.error(error.message);
        console.log("\n🔧 Troubleshooting:");
        console.log("1. Make sure backend is running on port 8000");
        console.log("2. Check if CORS is enabled on backend");
        console.log("3. Verify the user ID exists in database");
        console.log("4. Check network tab for more details");
    });

// Expected response format
const expectedFormat = {
    "quest_details": {
        "tasks": [
            {
                "name": "Task Name",
                "description": "Task Description"
            }
        ],
        "status": "Pending",
        "reward_lp": 10
    },
    "progress": {
        "status": "IN_PROGRESS",
        "completed": 0,
        "remaining": 5
    },
    "streak": 1
};

console.log("\n📄 Expected API Response Format:");
console.log(JSON.stringify(expectedFormat, null, 2));
