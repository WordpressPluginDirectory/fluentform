<div id="ff_preview" class="fluent_form_demo">
	<div style="background: #eee;color: black;padding: 10px 10px;margin-bottom: 20px;" class="ff_demo_notice">
		<p style="margin-bottom: 0px"><?php _e('You are viewing preview version of ', 'fluentform'); ?><?php echo $form->title; ?><?php _e('. Public users can not see this form. Please use shortcode to embed this form.', 'fluentform'); ?></p>
	</div>
	<?php echo do_shortcode('[fluentform id="'.$form->id.'"]'); ?>
</div>