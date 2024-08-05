#####################################################################################
##
## Author: Fawad
## Date: 28-07-2024
## Work: Overlay a video on top of another video with text below it 
## Usage: python3 video.py <overlay-video-path> <output-video-path> <'Text'>
##
####################################################################################


import argparse
import os
from moviepy.editor import VideoFileClip, CompositeVideoClip, concatenate_videoclips, TextClip


# Set the path to the ImageMagick binary
os.environ['IMAGEMAGICK_BINARY'] = '/usr/bin/convert'

# Position and size of the overlay video
position = (170, 250)  # Position of the overlay video (in pixels from the top-left corner)
overlay_size = (550, 550)  # Size of the overlay video (width, height)

# Start time and duration for the overlay video
overlay_start = 0  # Start time in seconds
overlay_duration = 10  # Duration in seconds

# Paths to the video files
base_video_path = '/home/digi/mvc_python/doctor.mp4'

def overlay_video_on_base(base_video_path, overlay_video_path, output_path, position, overlay_size, overlay_start, overlay_duration,textname):
    """
    Overlays a smaller video on top of a base video starting from a specified time for a specified duration, 
    then continues the base video as usual. Also adds a text overlay below the overlay video.

    :param base_video_path: Path to the base video file.
    :param overlay_video_path: Path to the overlay video file.
    :param output_path: Path to the output video file.
    :param position: (x, y) position of the overlay video in pixels (from the top-left corner of the base video).
    :param overlay_size: (width, height) size of the overlay video in pixels.
    :param overlay_start: Start time in seconds for the overlay video.
    :param overlay_duration: Duration in seconds for which the overlay video should be displayed.
    """
    try:
        # Load the base video and the overlay video
        base_video = VideoFileClip(base_video_path)
        overlay_video = VideoFileClip(overlay_video_path).resize(overlay_size)  # Resize overlay video to fit the frame
        
        font_path = '/home/digi/mvc_python/Fonts/georgia-2-cufonfonts/georgiab.ttf'  # Update this with the correct path to your font
        text_clip = TextClip(textname, fontsize=50, color='black', font=font_path)
        text_position = (170, 810) 
        text_clip = text_clip.set_position(text_position).set_duration(overlay_duration).set_start(overlay_start)

        # Ensure the overlay video doesn't exceed the base video duration
        overlay_end = overlay_start + overlay_duration
        overlay_end = min(overlay_end, base_video.duration)
        overlay_duration = overlay_end - overlay_start

        # Cut the overlay video to the specified overlay duration
        overlay_video = overlay_video.subclip(0, overlay_duration).set_position(position)

        # Create the composite video for the overlay duration
        part1 = base_video.subclip(0, overlay_start)
        composite_clip = CompositeVideoClip([base_video.subclip(overlay_start, overlay_end).set_duration(overlay_duration),overlay_video, text_clip])
        part2 = base_video.subclip(overlay_end)

        # Concatenate the clips
        final_video = concatenate_videoclips([part1, composite_clip, part2])

        # Write the result to a file
        final_video.write_videofile(output_path, codec='libx264', audio_codec='aac')
    
    except Exception as e:
        print(f"An error occurred: {e}")

def main():
    parser = argparse.ArgumentParser(description="Overlay a video on top of another video.")
    
    parser.add_argument('overlay_video_path', type=str, help="Path to the overlay video file.")
    parser.add_argument('output_path', type=str, help="Path to the output video file.")
    parser.add_argument('textname', type=str, help="Text Name")
    
    args = parser.parse_args()

    # Call the function to overlay the video
    overlay_video_on_base(
        base_video_path,
        args.overlay_video_path,
        args.output_path,
        position,
        overlay_size,
        overlay_start,
        overlay_duration,
        args.textname
    )

if __name__ == "__main__":
    main()
