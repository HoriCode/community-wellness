#Task 1
#Sector:
Health & Wellness Innovation

#Local Challenge:
Students and community residents may need a simple educational tool
to organize general wellness habits in their daily routine.

#Target Users:
Students and community residents.

#Proposed Project:
Community Wellness Habits Guide.

#Key Features:
1. A daily wellness checklist.
2. Educational wellness information cards.
3. A progress counter showing completed checklist items.

#Safety Scope:
The website provides general educational and demonstration content only.
It does not diagnose conditions, prescribe treatment, recommend medication,
or replace advice from a qualified healthcare professional.

#Task 2 — Zero-Shot Prompting
Create a simple webpage about healthy habits.

#Task 3 - 
Act as a frontend developer specializing in semantic HTML, responsive CSS, and accessible JavaScript.

Create a responsive single-page Community Wellness Habits Guide for students and community residents.

Include:

-- A daily wellness checklist.
-- Educational information cards about sleep, hydration, movement, and stress management.
-- A progress counter showing how many checklist items are completed.

Use semantic HTML, CSS, and vanilla JavaScript only. Do not use external frameworks, backend services, databases, authentication, or external APIs.
The content must be general educational information only. Do not include diagnoses, medical treatment instructions, medication recommendations, personalized medical advice, or emergency health claims.

Provide separate index.html, style.css, and script.js files.

Acceptance criteria:

-- The page opens locally without a backend.
-- Checklist items can be selected and deselected.
-- The completed-item counter updates correctly.
-- The controls work with both mouse and keyboard interaction.
-- Every checkbox has a visible associated label.
-- The layout is readable on mobile screens.
-- The page clearly states that it is educational and not medical advice.

#Task 4A
Create wellness checklist items using this format:

Example 1:
Habit: Take a short movement break
Category: Movement
Description: Stand up and move gently for a few minutes when possible.

Example 2:
Habit: Prepare for a regular sleep schedule
Category: Sleep
Description: Try to keep a consistent bedtime and wake-up routine.

Generate four additional general educational wellness habits using the same format. Render all items as an accessible checklist using semantic HTML, CSS, and vanilla JavaScript.

Do not generate diagnoses, treatment instructions, medication advice, or personalized medical recommendations.

#Task 4B
Act as a frontend accessibility reviewer and health-content safety reviewer.

Review my Community Wellness Habits Guide for:

semantic HTML,
checkbox labels,
keyboard access,
visible focus indicators,
readable mobile layout,
clear headings,
understandable educational wording,
accidental medical claims or unsafe advice.
Identify specific problems and recommend targeted corrections without adding a backend, external API, diagnosis feature, or medical recommendation.
For every recommendation, explain how I can verify whether the problem exists.

#Task 5
> Review my Community Wellness Habits Guide against the original requirements.
> 
> Check:
> 
> 
> 1. Whether the checklist works correctly.
> 2. Whether the completed-item counter updates correctly.
> 3. Whether the HTML uses semantic elements.
> 4. Whether every checkbox has an associated label.
> 5. Whether keyboard users can operate the checklist.
> 6. Whether the layout works on mobile screens.
> 7. Whether the content remains general educational information.
> 8. Whether any wording sounds like diagnosis, treatment, or personalized medical advice.
> Return only these sections:
> 
> 
> 1. Observed issue and code or text evidence.
> 2. Probable cause.
> 3. Smallest appropriate correction.
> 4. Verification steps.
> Do not provide hidden reasoning. Do not modify unrelated features.