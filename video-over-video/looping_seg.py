#####################################################################################################################################
##
## Author: Fawad
## Date: 09-08-2024
## Work: Here it overlays a video on base video and dynamically tests if overlay video is equal or greater than the base video, 
##       and adjust accordingly by looping some segments if found greater
## Usage: python3 looping_seg.py <overlay-video-path> <output-video-path> <'Text'>
##
####################################################################################################################################


import argparse
import os
from moviepy.editor import VideoFileClip, CompositeVideoClip, concatenate_videoclips, TextClip, ImageClip

# Set the path to the ImageMagick binary
os.environ['IMAGEMAGICK_BINARY'] = '/usr/bin/convert'

# Position and size of the overlay video
position = (150, 80)  # Position of the overlay video (in pixels from the top-left corner)
overlay_size = (1000, 900)  # Size of the overlay video (width, height)

# Overlay start time and repetitive segment
overlay_start = 75  # Start time in seconds
overlay_period_end = 87  # End time of the overlay period in the base video
# repetitive_segment_duration = 5  # Duration of the repetitive segment

frame_times = [0] 

# Paths to the video files
base_part1_path = '/home/digi/mvc_python/1.mp4'
base_part2_path = '/home/digi/mvc_python/2.mp4'
base_part3_path = '/home/digi/mvc_python/3.mp4'
frame_image_path = '/home/digi/mvc_python/glen_f.png'  # Path to the frame image file

def create_repeated_base_video(base_part1_path, base_part2_path, base_part3_path, overlay_duration):
    repetitive_segment = VideoFileClip(base_part2_path)
    repetitive_duration = int(repetitive_segment.duration)
    print(repetitive_duration)

    # Calculate the required repetitions
    overlay_period_duration = overlay_period_end - overlay_start
    print("overlay_period_duration",overlay_period_duration)
    remaining_duration = overlay_duration - overlay_period_duration
    print("remaining_duration",remaining_duration)
    required_repeats = int((remaining_duration // repetitive_duration) + 1)
    print(required_repeats)
    
    # Repeat the segment
    repeated_segments = [repetitive_segment] * required_repeats
    print(repeated_segments)
    repeated_segment_video = concatenate_videoclips(repeated_segments).subclip(0, remaining_duration)
    # repeated_segment_video = concatenate_videoclips(repeated_segments)
    
    # Concatenate base video parts and repeated segments
    base_part1 = VideoFileClip(base_part1_path)
    base_part3 = VideoFileClip(base_part3_path)

    return concatenate_videoclips([
        base_part1,
        repetitive_segment,
        repeated_segment_video,
        base_part3
    ])

def overlay_video_on_base(base_part1_path, base_part2_path, base_part3_path, overlay_video_path, output_path, position, overlay_size, textname):
    try:
        # Load the base video parts and overlay video
        base_part1 = VideoFileClip(base_part1_path).volumex(0.2)
        base_part2 = VideoFileClip(base_part2_path).volumex(0.2)
        base_part3 = VideoFileClip(base_part3_path).volumex(0.2)
        overlay_video = VideoFileClip(overlay_video_path).resize(overlay_size)
        
        overlay_duration = int(overlay_video.duration)
        print(overlay_duration)


        if overlay_duration > overlay_period_end - overlay_start:
            # Create a repeated base video to match the overlay duration
            print("if")
            extended_base_video = create_repeated_base_video(base_part1_path, base_part2_path, base_part3_path, overlay_duration)
        else:
            print("else")
            extended_base_video = concatenate_videoclips([base_part1, base_part2, base_part3])

        print("p1")
        # Create a text clip
        font_path = '/home/digi/mvc_python/Fonts/georgia-2-cufonfonts/georgiab.ttf'
        text_clip = TextClip(textname, fontsize=50, color='white', font=font_path)
        text_position = (170, 990)
        text_clip = text_clip.set_position(text_position).set_duration(overlay_duration).set_start(overlay_start)
        print("p2")
        # Ensure the overlay video duration matches the repeated base video
        overlay_video = overlay_video.set_duration(overlay_duration).set_position(position).set_start(overlay_start)
        print("p3")
         # Add frame image at specified times
        frame_clips = []
        frame_durations = [overlay_duration]
        for start, duration in zip(frame_times, frame_durations):
            frame_clip = ImageClip(frame_image_path).set_duration(duration).set_position("center").resize(extended_base_video.size).set_start(start)
            frame_clips.append(frame_clip)

        # Create the composite clip
        # composite_clip = CompositeVideoClip([extended_base_video, overlay_video, text_clip])
        composite_clip = CompositeVideoClip([extended_base_video] + [overlay_video] + frame_clips + [text_clip])
        # Write the result to a file
        composite_clip.write_videofile(output_path, codec='libx264', audio_codec='aac')
    
    except Exception as e:
        print(f"An error occurred: {e}")

def main():
    parser = argparse.ArgumentParser(description="Overlay a video on top of another video.")
    parser.add_argument('overlay_video_path', type=str, help="Path to the overlay video file.")
    parser.add_argument('output_path', type=str, help="Path to the output video file.")
    parser.add_argument('textname', type=str, help="Text Name")
    args = parser.parse_args()

    overlay_video_on_base(
        base_part1_path,
        base_part2_path,
        base_part3_path,
        args.overlay_video_path,
        args.output_path,
        position,
        overlay_size,
        args.textname
    )

if __name__ == "__main__":
    main()
